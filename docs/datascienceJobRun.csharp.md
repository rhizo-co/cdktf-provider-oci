# `datascienceJobRun` Submodule <a name="`datascienceJobRun` Submodule" id="rhizo-co-terraform-provider-oci.datascienceJobRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceJobRun <a name="DatascienceJobRun" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run oci_datascience_job_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRun(Construct Scope, string Id, DatascienceJobRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig">DatascienceJobRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig">DatascienceJobRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobConfigurationOverrideDetails">PutJobConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobEnvironmentConfigurationOverrideDetails">PutJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobLogConfigurationOverrideDetails">PutJobLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetAsynchronous">ResetAsynchronous</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobConfigurationOverrideDetails">ResetJobConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobEnvironmentConfigurationOverrideDetails">ResetJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobLogConfigurationOverrideDetails">ResetJobLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetOpcParentRptUrl">ResetOpcParentRptUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobConfigurationOverrideDetails` <a name="PutJobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobConfigurationOverrideDetails"></a>

```csharp
private void PutJobConfigurationOverrideDetails(DatascienceJobRunJobConfigurationOverrideDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a>

---

##### `PutJobEnvironmentConfigurationOverrideDetails` <a name="PutJobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobEnvironmentConfigurationOverrideDetails"></a>

```csharp
private void PutJobEnvironmentConfigurationOverrideDetails(DatascienceJobRunJobEnvironmentConfigurationOverrideDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobEnvironmentConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a>

---

##### `PutJobLogConfigurationOverrideDetails` <a name="PutJobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobLogConfigurationOverrideDetails"></a>

```csharp
private void PutJobLogConfigurationOverrideDetails(DatascienceJobRunJobLogConfigurationOverrideDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobLogConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putTimeouts"></a>

```csharp
private void PutTimeouts(DatascienceJobRunTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a>

---

##### `ResetAsynchronous` <a name="ResetAsynchronous" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetAsynchronous"></a>

```csharp
private void ResetAsynchronous()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJobConfigurationOverrideDetails` <a name="ResetJobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobConfigurationOverrideDetails"></a>

```csharp
private void ResetJobConfigurationOverrideDetails()
```

##### `ResetJobEnvironmentConfigurationOverrideDetails` <a name="ResetJobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobEnvironmentConfigurationOverrideDetails"></a>

```csharp
private void ResetJobEnvironmentConfigurationOverrideDetails()
```

##### `ResetJobLogConfigurationOverrideDetails` <a name="ResetJobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobLogConfigurationOverrideDetails"></a>

```csharp
private void ResetJobLogConfigurationOverrideDetails()
```

##### `ResetOpcParentRptUrl` <a name="ResetOpcParentRptUrl" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetOpcParentRptUrl"></a>

```csharp
private void ResetOpcParentRptUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceJobRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatascienceJobRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatascienceJobRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatascienceJobRun.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatascienceJobRun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatascienceJobRun resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatascienceJobRun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatascienceJobRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceJobRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobConfigurationOverrideDetails">JobConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetails">JobEnvironmentConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobInfrastructureConfigurationDetails">JobInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList">DatascienceJobRunJobInfrastructureConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobLogConfigurationOverrideDetails">JobLogConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobStorageMountConfigurationDetailsList">JobStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList">DatascienceJobRunJobStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.logDetails">LogDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList">DatascienceJobRunLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeAccepted">TimeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference">DatascienceJobRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.asynchronousInput">AsynchronousInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobConfigurationOverrideDetailsInput">JobConfigurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetailsInput">JobEnvironmentConfigurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobIdInput">JobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobLogConfigurationOverrideDetailsInput">JobLogConfigurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.opcParentRptUrlInput">OpcParentRptUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.asynchronous">Asynchronous</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.opcParentRptUrl">OpcParentRptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `JobConfigurationOverrideDetails`<sup>Required</sup> <a name="JobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobConfigurationOverrideDetails"></a>

```csharp
public DatascienceJobRunJobConfigurationOverrideDetailsOutputReference JobConfigurationOverrideDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobConfigurationOverrideDetailsOutputReference</a>

---

##### `JobEnvironmentConfigurationOverrideDetails`<sup>Required</sup> <a name="JobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetails"></a>

```csharp
public DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference JobEnvironmentConfigurationOverrideDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference</a>

---

##### `JobInfrastructureConfigurationDetails`<sup>Required</sup> <a name="JobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobInfrastructureConfigurationDetails"></a>

```csharp
public DatascienceJobRunJobInfrastructureConfigurationDetailsList JobInfrastructureConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList">DatascienceJobRunJobInfrastructureConfigurationDetailsList</a>

---

##### `JobLogConfigurationOverrideDetails`<sup>Required</sup> <a name="JobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobLogConfigurationOverrideDetails"></a>

```csharp
public DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference JobLogConfigurationOverrideDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference</a>

---

##### `JobStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="JobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobStorageMountConfigurationDetailsList"></a>

```csharp
public DatascienceJobRunJobStorageMountConfigurationDetailsListStructList JobStorageMountConfigurationDetailsList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList">DatascienceJobRunJobStorageMountConfigurationDetailsListStructList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LogDetails`<sup>Required</sup> <a name="LogDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.logDetails"></a>

```csharp
public DatascienceJobRunLogDetailsList LogDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList">DatascienceJobRunLogDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeAccepted"></a>

```csharp
public string TimeAccepted { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeouts"></a>

```csharp
public DatascienceJobRunTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference">DatascienceJobRunTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `AsynchronousInput`<sup>Optional</sup> <a name="AsynchronousInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.asynchronousInput"></a>

```csharp
public object AsynchronousInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobConfigurationOverrideDetailsInput`<sup>Optional</sup> <a name="JobConfigurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobConfigurationOverrideDetailsInput"></a>

```csharp
public DatascienceJobRunJobConfigurationOverrideDetails JobConfigurationOverrideDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a>

---

##### `JobEnvironmentConfigurationOverrideDetailsInput`<sup>Optional</sup> <a name="JobEnvironmentConfigurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetailsInput"></a>

```csharp
public DatascienceJobRunJobEnvironmentConfigurationOverrideDetails JobEnvironmentConfigurationOverrideDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a>

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobIdInput"></a>

```csharp
public string JobIdInput { get; }
```

- *Type:* string

---

##### `JobLogConfigurationOverrideDetailsInput`<sup>Optional</sup> <a name="JobLogConfigurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobLogConfigurationOverrideDetailsInput"></a>

```csharp
public DatascienceJobRunJobLogConfigurationOverrideDetails JobLogConfigurationOverrideDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a>

---

##### `OpcParentRptUrlInput`<sup>Optional</sup> <a name="OpcParentRptUrlInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.opcParentRptUrlInput"></a>

```csharp
public string OpcParentRptUrlInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Asynchronous`<sup>Required</sup> <a name="Asynchronous" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.asynchronous"></a>

```csharp
public object Asynchronous { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `OpcParentRptUrl`<sup>Required</sup> <a name="OpcParentRptUrl" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.opcParentRptUrl"></a>

```csharp
public string OpcParentRptUrl { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceJobRunConfig <a name="DatascienceJobRunConfig" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string JobId,
    string ProjectId,
    object Asynchronous = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DatascienceJobRunJobConfigurationOverrideDetails JobConfigurationOverrideDetails = null,
    DatascienceJobRunJobEnvironmentConfigurationOverrideDetails JobEnvironmentConfigurationOverrideDetails = null,
    DatascienceJobRunJobLogConfigurationOverrideDetails JobLogConfigurationOverrideDetails = null,
    string OpcParentRptUrl = null,
    DatascienceJobRunTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#compartment_id DatascienceJobRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobId">JobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_id DatascienceJobRun#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#project_id DatascienceJobRun#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.asynchronous">Asynchronous</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#asynchronous DatascienceJobRun#asynchronous}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#defined_tags DatascienceJobRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#display_name DatascienceJobRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#freeform_tags DatascienceJobRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#id DatascienceJobRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobConfigurationOverrideDetails">JobConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a></code> | job_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobEnvironmentConfigurationOverrideDetails">JobEnvironmentConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a></code> | job_environment_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobLogConfigurationOverrideDetails">JobLogConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a></code> | job_log_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.opcParentRptUrl">OpcParentRptUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#opc_parent_rpt_url DatascienceJobRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#compartment_id DatascienceJobRun#compartment_id}.

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobId"></a>

```csharp
public string JobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_id DatascienceJobRun#job_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#project_id DatascienceJobRun#project_id}.

---

##### `Asynchronous`<sup>Optional</sup> <a name="Asynchronous" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.asynchronous"></a>

```csharp
public object Asynchronous { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#asynchronous DatascienceJobRun#asynchronous}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#defined_tags DatascienceJobRun#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#display_name DatascienceJobRun#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#freeform_tags DatascienceJobRun#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#id DatascienceJobRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobConfigurationOverrideDetails`<sup>Optional</sup> <a name="JobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobConfigurationOverrideDetails"></a>

```csharp
public DatascienceJobRunJobConfigurationOverrideDetails JobConfigurationOverrideDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a>

job_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_configuration_override_details DatascienceJobRun#job_configuration_override_details}

---

##### `JobEnvironmentConfigurationOverrideDetails`<sup>Optional</sup> <a name="JobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobEnvironmentConfigurationOverrideDetails"></a>

```csharp
public DatascienceJobRunJobEnvironmentConfigurationOverrideDetails JobEnvironmentConfigurationOverrideDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a>

job_environment_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_environment_configuration_override_details DatascienceJobRun#job_environment_configuration_override_details}

---

##### `JobLogConfigurationOverrideDetails`<sup>Optional</sup> <a name="JobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobLogConfigurationOverrideDetails"></a>

```csharp
public DatascienceJobRunJobLogConfigurationOverrideDetails JobLogConfigurationOverrideDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a>

job_log_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_log_configuration_override_details DatascienceJobRun#job_log_configuration_override_details}

---

##### `OpcParentRptUrl`<sup>Optional</sup> <a name="OpcParentRptUrl" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.opcParentRptUrl"></a>

```csharp
public string OpcParentRptUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#opc_parent_rpt_url DatascienceJobRun#opc_parent_rpt_url}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.timeouts"></a>

```csharp
public DatascienceJobRunTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#timeouts DatascienceJobRun#timeouts}

---

### DatascienceJobRunJobConfigurationOverrideDetails <a name="DatascienceJobRunJobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobConfigurationOverrideDetails {
    string JobType,
    string CommandLineArguments = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string MaximumRuntimeInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.jobType">JobType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_type DatascienceJobRun#job_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.commandLineArguments">CommandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#command_line_arguments DatascienceJobRun#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#environment_variables DatascienceJobRun#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#maximum_runtime_in_minutes DatascienceJobRun#maximum_runtime_in_minutes}. |

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.jobType"></a>

```csharp
public string JobType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_type DatascienceJobRun#job_type}.

---

##### `CommandLineArguments`<sup>Optional</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.commandLineArguments"></a>

```csharp
public string CommandLineArguments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#command_line_arguments DatascienceJobRun#command_line_arguments}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#environment_variables DatascienceJobRun#environment_variables}.

---

##### `MaximumRuntimeInMinutes`<sup>Optional</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.maximumRuntimeInMinutes"></a>

```csharp
public string MaximumRuntimeInMinutes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#maximum_runtime_in_minutes DatascienceJobRun#maximum_runtime_in_minutes}.

---

### DatascienceJobRunJobEnvironmentConfigurationOverrideDetails <a name="DatascienceJobRunJobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobEnvironmentConfigurationOverrideDetails {
    string Image,
    string JobEnvironmentType,
    string[] Cmd = null,
    string[] Entrypoint = null,
    string ImageDigest = null,
    string ImageSignatureId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image DatascienceJobRun#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.jobEnvironmentType">JobEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_environment_type DatascienceJobRun#job_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.cmd">Cmd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#cmd DatascienceJobRun#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.entrypoint">Entrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#entrypoint DatascienceJobRun#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.imageDigest">ImageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image_digest DatascienceJobRun#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.imageSignatureId">ImageSignatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image_signature_id DatascienceJobRun#image_signature_id}. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image DatascienceJobRun#image}.

---

##### `JobEnvironmentType`<sup>Required</sup> <a name="JobEnvironmentType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.jobEnvironmentType"></a>

```csharp
public string JobEnvironmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_environment_type DatascienceJobRun#job_environment_type}.

---

##### `Cmd`<sup>Optional</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.cmd"></a>

```csharp
public string[] Cmd { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#cmd DatascienceJobRun#cmd}.

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.entrypoint"></a>

```csharp
public string[] Entrypoint { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#entrypoint DatascienceJobRun#entrypoint}.

---

##### `ImageDigest`<sup>Optional</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.imageDigest"></a>

```csharp
public string ImageDigest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image_digest DatascienceJobRun#image_digest}.

---

##### `ImageSignatureId`<sup>Optional</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.imageSignatureId"></a>

```csharp
public string ImageSignatureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image_signature_id DatascienceJobRun#image_signature_id}.

---

### DatascienceJobRunJobInfrastructureConfigurationDetails <a name="DatascienceJobRunJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobInfrastructureConfigurationDetails {

};
```


### DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails {

};
```


### DatascienceJobRunJobLogConfigurationOverrideDetails <a name="DatascienceJobRunJobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobLogConfigurationOverrideDetails {
    object EnableAutoLogCreation = null,
    object EnableLogging = null,
    string LogGroupId = null,
    string LogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#enable_auto_log_creation DatascienceJobRun#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#enable_logging DatascienceJobRun#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#log_group_id DatascienceJobRun#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.logId">LogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#log_id DatascienceJobRun#log_id}. |

---

##### `EnableAutoLogCreation`<sup>Optional</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.enableAutoLogCreation"></a>

```csharp
public object EnableAutoLogCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#enable_auto_log_creation DatascienceJobRun#enable_auto_log_creation}.

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#enable_logging DatascienceJobRun#enable_logging}.

---

##### `LogGroupId`<sup>Optional</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#log_group_id DatascienceJobRun#log_group_id}.

---

##### `LogId`<sup>Optional</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.logId"></a>

```csharp
public string LogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#log_id DatascienceJobRun#log_id}.

---

### DatascienceJobRunJobStorageMountConfigurationDetailsListStruct <a name="DatascienceJobRunJobStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobStorageMountConfigurationDetailsListStruct {

};
```


### DatascienceJobRunLogDetails <a name="DatascienceJobRunLogDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunLogDetails {

};
```


### DatascienceJobRunTimeouts <a name="DatascienceJobRunTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#create DatascienceJobRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#delete DatascienceJobRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#update DatascienceJobRun#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#create DatascienceJobRun#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#delete DatascienceJobRun#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#update DatascienceJobRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceJobRunJobConfigurationOverrideDetailsOutputReference <a name="DatascienceJobRunJobConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobConfigurationOverrideDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetCommandLineArguments">ResetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes">ResetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommandLineArguments` <a name="ResetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetCommandLineArguments"></a>

```csharp
private void ResetCommandLineArguments()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetMaximumRuntimeInMinutes` <a name="ResetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```csharp
private void ResetMaximumRuntimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput">CommandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobTypeInput">JobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput">MaximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobType">JobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandLineArgumentsInput`<sup>Optional</sup> <a name="CommandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput"></a>

```csharp
public string CommandLineArgumentsInput { get; }
```

- *Type:* string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `JobTypeInput`<sup>Optional</sup> <a name="JobTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobTypeInput"></a>

```csharp
public string JobTypeInput { get; }
```

- *Type:* string

---

##### `MaximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="MaximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```csharp
public string MaximumRuntimeInMinutesInput { get; }
```

- *Type:* string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```csharp
public string CommandLineArguments { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobType"></a>

```csharp
public string JobType { get; }
```

- *Type:* string

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```csharp
public string MaximumRuntimeInMinutes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobRunJobConfigurationOverrideDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a>

---


### DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference <a name="DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetCmd">ResetCmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetImageDigest">ResetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetImageSignatureId">ResetImageSignatureId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCmd` <a name="ResetCmd" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetCmd"></a>

```csharp
private void ResetCmd()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetEntrypoint"></a>

```csharp
private void ResetEntrypoint()
```

##### `ResetImageDigest` <a name="ResetImageDigest" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetImageDigest"></a>

```csharp
private void ResetImageDigest()
```

##### `ResetImageSignatureId` <a name="ResetImageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetImageSignatureId"></a>

```csharp
private void ResetImageSignatureId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmdInput">CmdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypointInput">EntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigestInput">ImageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureIdInput">ImageSignatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentTypeInput">JobEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmd">Cmd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypoint">Entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureId">ImageSignatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentType">JobEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CmdInput`<sup>Optional</sup> <a name="CmdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmdInput"></a>

```csharp
public string[] CmdInput { get; }
```

- *Type:* string[]

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypointInput"></a>

```csharp
public string[] EntrypointInput { get; }
```

- *Type:* string[]

---

##### `ImageDigestInput`<sup>Optional</sup> <a name="ImageDigestInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigestInput"></a>

```csharp
public string ImageDigestInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `ImageSignatureIdInput`<sup>Optional</sup> <a name="ImageSignatureIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureIdInput"></a>

```csharp
public string ImageSignatureIdInput { get; }
```

- *Type:* string

---

##### `JobEnvironmentTypeInput`<sup>Optional</sup> <a name="JobEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentTypeInput"></a>

```csharp
public string JobEnvironmentTypeInput { get; }
```

- *Type:* string

---

##### `Cmd`<sup>Required</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmd"></a>

```csharp
public string[] Cmd { get; }
```

- *Type:* string[]

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypoint"></a>

```csharp
public string[] Entrypoint { get; }
```

- *Type:* string[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigest"></a>

```csharp
public string ImageDigest { get; }
```

- *Type:* string

---

##### `ImageSignatureId`<sup>Required</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureId"></a>

```csharp
public string ImageSignatureId { get; }
```

- *Type:* string

---

##### `JobEnvironmentType`<sup>Required</sup> <a name="JobEnvironmentType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentType"></a>

```csharp
public string JobEnvironmentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobRunJobEnvironmentConfigurationOverrideDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a>

---


### DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get"></a>

```csharp
private DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---


### DatascienceJobRunJobInfrastructureConfigurationDetailsList <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobInfrastructureConfigurationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.get"></a>

```csharp
private DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType">JobInfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails">JobShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetails">DatascienceJobRunJobInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```csharp
public double BlockStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `JobInfrastructureType`<sup>Required</sup> <a name="JobInfrastructureType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType"></a>

```csharp
public string JobInfrastructureType { get; }
```

- *Type:* string

---

##### `JobShapeConfigDetails`<sup>Required</sup> <a name="JobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails"></a>

```csharp
public DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList JobShapeConfigDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobRunJobInfrastructureConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetails">DatascienceJobRunJobInfrastructureConfigurationDetails</a>

---


### DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference <a name="DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation">ResetEnableAutoLogCreation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetLogGroupId">ResetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetLogId">ResetLogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableAutoLogCreation` <a name="ResetEnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation"></a>

```csharp
private void ResetEnableAutoLogCreation()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetLogGroupId` <a name="ResetLogGroupId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetLogGroupId"></a>

```csharp
private void ResetLogGroupId()
```

##### `ResetLogId` <a name="ResetLogId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetLogId"></a>

```csharp
private void ResetLogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput">EnableAutoLogCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logIdInput">LogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableAutoLogCreationInput`<sup>Optional</sup> <a name="EnableAutoLogCreationInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```csharp
public object EnableAutoLogCreationInput { get; }
```

- *Type:* object

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logIdInput"></a>

```csharp
public string LogIdInput { get; }
```

- *Type:* string

---

##### `EnableAutoLogCreation`<sup>Required</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```csharp
public object EnableAutoLogCreation { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobRunJobLogConfigurationOverrideDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a>

---


### DatascienceJobRunJobStorageMountConfigurationDetailsListStructList <a name="DatascienceJobRunJobStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobStorageMountConfigurationDetailsListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.get"></a>

```csharp
private DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference <a name="DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">DestinationDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">DestinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId">ExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStruct">DatascienceJobRunJobStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DestinationDirectoryName`<sup>Required</sup> <a name="DestinationDirectoryName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```csharp
public string DestinationDirectoryName { get; }
```

- *Type:* string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```csharp
public string DestinationPath { get; }
```

- *Type:* string

---

##### `ExportId`<sup>Required</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```csharp
public string ExportId { get; }
```

- *Type:* string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```csharp
public string MountTargetId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobRunJobStorageMountConfigurationDetailsListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStruct">DatascienceJobRunJobStorageMountConfigurationDetailsListStruct</a>

---


### DatascienceJobRunLogDetailsList <a name="DatascienceJobRunLogDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunLogDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.get"></a>

```csharp
private DatascienceJobRunLogDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatascienceJobRunLogDetailsOutputReference <a name="DatascienceJobRunLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunLogDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetails">DatascienceJobRunLogDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobRunLogDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetails">DatascienceJobRunLogDetails</a>

---


### DatascienceJobRunTimeoutsOutputReference <a name="DatascienceJobRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobRunTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



