# `datascienceJob` Submodule <a name="`datascienceJob` Submodule" id="rhizo-co-terraform-provider-oci.datascienceJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceJob <a name="DatascienceJob" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job oci_datascience_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJob(Construct Scope, string Id, DatascienceJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig">DatascienceJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig">DatascienceJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails">PutJobConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails">PutJobEnvironmentConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails">PutJobInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails">PutJobLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobStorageMountConfigurationDetailsList">PutJobStorageMountConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentDisposition">ResetArtifactContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentLength">ResetArtifactContentLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDeleteRelatedJobRuns">ResetDeleteRelatedJobRuns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobArtifact">ResetJobArtifact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobEnvironmentConfigurationDetails">ResetJobEnvironmentConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobLogConfigurationDetails">ResetJobLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobStorageMountConfigurationDetailsList">ResetJobStorageMountConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobConfigurationDetails` <a name="PutJobConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails"></a>

```csharp
private void PutJobConfigurationDetails(DatascienceJobJobConfigurationDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

---

##### `PutJobEnvironmentConfigurationDetails` <a name="PutJobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails"></a>

```csharp
private void PutJobEnvironmentConfigurationDetails(DatascienceJobJobEnvironmentConfigurationDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

---

##### `PutJobInfrastructureConfigurationDetails` <a name="PutJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails"></a>

```csharp
private void PutJobInfrastructureConfigurationDetails(DatascienceJobJobInfrastructureConfigurationDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

---

##### `PutJobLogConfigurationDetails` <a name="PutJobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails"></a>

```csharp
private void PutJobLogConfigurationDetails(DatascienceJobJobLogConfigurationDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

---

##### `PutJobStorageMountConfigurationDetailsList` <a name="PutJobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobStorageMountConfigurationDetailsList"></a>

```csharp
private void PutJobStorageMountConfigurationDetailsList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobStorageMountConfigurationDetailsList.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts"></a>

```csharp
private void PutTimeouts(DatascienceJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>

---

##### `ResetArtifactContentDisposition` <a name="ResetArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentDisposition"></a>

```csharp
private void ResetArtifactContentDisposition()
```

##### `ResetArtifactContentLength` <a name="ResetArtifactContentLength" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentLength"></a>

```csharp
private void ResetArtifactContentLength()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDeleteRelatedJobRuns` <a name="ResetDeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDeleteRelatedJobRuns"></a>

```csharp
private void ResetDeleteRelatedJobRuns()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJobArtifact` <a name="ResetJobArtifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobArtifact"></a>

```csharp
private void ResetJobArtifact()
```

##### `ResetJobEnvironmentConfigurationDetails` <a name="ResetJobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobEnvironmentConfigurationDetails"></a>

```csharp
private void ResetJobEnvironmentConfigurationDetails()
```

##### `ResetJobLogConfigurationDetails` <a name="ResetJobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobLogConfigurationDetails"></a>

```csharp
private void ResetJobLogConfigurationDetails()
```

##### `ResetJobStorageMountConfigurationDetailsList` <a name="ResetJobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobStorageMountConfigurationDetailsList"></a>

```csharp
private void ResetJobStorageMountConfigurationDetailsList()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatascienceJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatascienceJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatascienceJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatascienceJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatascienceJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatascienceJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatascienceJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentMd5">ArtifactContentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactLastModified">ArtifactLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.emptyArtifact">EmptyArtifact</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetails">JobConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference">DatascienceJobJobConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetails">JobEnvironmentConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference">DatascienceJobJobEnvironmentConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetails">JobInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetails">JobLogConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference">DatascienceJobJobLogConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsList">JobStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList">DatascienceJobJobStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference">DatascienceJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDispositionInput">ArtifactContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLengthInput">ArtifactContentLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRunsInput">DeleteRelatedJobRunsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifactInput">JobArtifactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetailsInput">JobConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetailsInput">JobEnvironmentConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetailsInput">JobInfrastructureConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetailsInput">JobLogConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsListInput">JobStorageMountConfigurationDetailsListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDisposition">ArtifactContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLength">ArtifactContentLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRuns">DeleteRelatedJobRuns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifact">JobArtifact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ArtifactContentMd5`<sup>Required</sup> <a name="ArtifactContentMd5" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentMd5"></a>

```csharp
public string ArtifactContentMd5 { get; }
```

- *Type:* string

---

##### `ArtifactLastModified`<sup>Required</sup> <a name="ArtifactLastModified" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactLastModified"></a>

```csharp
public string ArtifactLastModified { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `EmptyArtifact`<sup>Required</sup> <a name="EmptyArtifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.emptyArtifact"></a>

```csharp
public IResolvable EmptyArtifact { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `JobConfigurationDetails`<sup>Required</sup> <a name="JobConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetails"></a>

```csharp
public DatascienceJobJobConfigurationDetailsOutputReference JobConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference">DatascienceJobJobConfigurationDetailsOutputReference</a>

---

##### `JobEnvironmentConfigurationDetails`<sup>Required</sup> <a name="JobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetails"></a>

```csharp
public DatascienceJobJobEnvironmentConfigurationDetailsOutputReference JobEnvironmentConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference">DatascienceJobJobEnvironmentConfigurationDetailsOutputReference</a>

---

##### `JobInfrastructureConfigurationDetails`<sup>Required</sup> <a name="JobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetails"></a>

```csharp
public DatascienceJobJobInfrastructureConfigurationDetailsOutputReference JobInfrastructureConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsOutputReference</a>

---

##### `JobLogConfigurationDetails`<sup>Required</sup> <a name="JobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetails"></a>

```csharp
public DatascienceJobJobLogConfigurationDetailsOutputReference JobLogConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference">DatascienceJobJobLogConfigurationDetailsOutputReference</a>

---

##### `JobStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="JobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsList"></a>

```csharp
public DatascienceJobJobStorageMountConfigurationDetailsListStructList JobStorageMountConfigurationDetailsList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList">DatascienceJobJobStorageMountConfigurationDetailsListStructList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeouts"></a>

```csharp
public DatascienceJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference">DatascienceJobTimeoutsOutputReference</a>

---

##### `ArtifactContentDispositionInput`<sup>Optional</sup> <a name="ArtifactContentDispositionInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDispositionInput"></a>

```csharp
public string ArtifactContentDispositionInput { get; }
```

- *Type:* string

---

##### `ArtifactContentLengthInput`<sup>Optional</sup> <a name="ArtifactContentLengthInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLengthInput"></a>

```csharp
public string ArtifactContentLengthInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteRelatedJobRunsInput`<sup>Optional</sup> <a name="DeleteRelatedJobRunsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRunsInput"></a>

```csharp
public object DeleteRelatedJobRunsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobArtifactInput`<sup>Optional</sup> <a name="JobArtifactInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifactInput"></a>

```csharp
public string JobArtifactInput { get; }
```

- *Type:* string

---

##### `JobConfigurationDetailsInput`<sup>Optional</sup> <a name="JobConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetailsInput"></a>

```csharp
public DatascienceJobJobConfigurationDetails JobConfigurationDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

---

##### `JobEnvironmentConfigurationDetailsInput`<sup>Optional</sup> <a name="JobEnvironmentConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetailsInput"></a>

```csharp
public DatascienceJobJobEnvironmentConfigurationDetails JobEnvironmentConfigurationDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

---

##### `JobInfrastructureConfigurationDetailsInput`<sup>Optional</sup> <a name="JobInfrastructureConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetailsInput"></a>

```csharp
public DatascienceJobJobInfrastructureConfigurationDetails JobInfrastructureConfigurationDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

---

##### `JobLogConfigurationDetailsInput`<sup>Optional</sup> <a name="JobLogConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetailsInput"></a>

```csharp
public DatascienceJobJobLogConfigurationDetails JobLogConfigurationDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

---

##### `JobStorageMountConfigurationDetailsListInput`<sup>Optional</sup> <a name="JobStorageMountConfigurationDetailsListInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsListInput"></a>

```csharp
public object JobStorageMountConfigurationDetailsListInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ArtifactContentDisposition`<sup>Required</sup> <a name="ArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDisposition"></a>

```csharp
public string ArtifactContentDisposition { get; }
```

- *Type:* string

---

##### `ArtifactContentLength`<sup>Required</sup> <a name="ArtifactContentLength" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLength"></a>

```csharp
public string ArtifactContentLength { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteRelatedJobRuns`<sup>Required</sup> <a name="DeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRuns"></a>

```csharp
public object DeleteRelatedJobRuns { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobArtifact`<sup>Required</sup> <a name="JobArtifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifact"></a>

```csharp
public string JobArtifact { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceJobConfig <a name="DatascienceJobConfig" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    DatascienceJobJobConfigurationDetails JobConfigurationDetails,
    DatascienceJobJobInfrastructureConfigurationDetails JobInfrastructureConfigurationDetails,
    string ProjectId,
    string ArtifactContentDisposition = null,
    string ArtifactContentLength = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    object DeleteRelatedJobRuns = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string JobArtifact = null,
    DatascienceJobJobEnvironmentConfigurationDetails JobEnvironmentConfigurationDetails = null,
    DatascienceJobJobLogConfigurationDetails JobLogConfigurationDetails = null,
    object JobStorageMountConfigurationDetailsList = null,
    DatascienceJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#compartment_id DatascienceJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobConfigurationDetails">JobConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | job_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobInfrastructureConfigurationDetails">JobInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | job_infrastructure_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#project_id DatascienceJob#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentDisposition">ArtifactContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_disposition DatascienceJob#artifact_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentLength">ArtifactContentLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_length DatascienceJob#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#defined_tags DatascienceJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.deleteRelatedJobRuns">DeleteRelatedJobRuns</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete_related_job_runs DatascienceJob#delete_related_job_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#description DatascienceJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#display_name DatascienceJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#freeform_tags DatascienceJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#id DatascienceJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobArtifact">JobArtifact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_artifact DatascienceJob#job_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobEnvironmentConfigurationDetails">JobEnvironmentConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | job_environment_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobLogConfigurationDetails">JobLogConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | job_log_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobStorageMountConfigurationDetailsList">JobStorageMountConfigurationDetailsList</a></code> | <code>object</code> | job_storage_mount_configuration_details_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#compartment_id DatascienceJob#compartment_id}.

---

##### `JobConfigurationDetails`<sup>Required</sup> <a name="JobConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobConfigurationDetails"></a>

```csharp
public DatascienceJobJobConfigurationDetails JobConfigurationDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

job_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_configuration_details DatascienceJob#job_configuration_details}

---

##### `JobInfrastructureConfigurationDetails`<sup>Required</sup> <a name="JobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobInfrastructureConfigurationDetails"></a>

```csharp
public DatascienceJobJobInfrastructureConfigurationDetails JobInfrastructureConfigurationDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

job_infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_configuration_details DatascienceJob#job_infrastructure_configuration_details}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#project_id DatascienceJob#project_id}.

---

##### `ArtifactContentDisposition`<sup>Optional</sup> <a name="ArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentDisposition"></a>

```csharp
public string ArtifactContentDisposition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_disposition DatascienceJob#artifact_content_disposition}.

---

##### `ArtifactContentLength`<sup>Optional</sup> <a name="ArtifactContentLength" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentLength"></a>

```csharp
public string ArtifactContentLength { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_length DatascienceJob#artifact_content_length}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#defined_tags DatascienceJob#defined_tags}.

---

##### `DeleteRelatedJobRuns`<sup>Optional</sup> <a name="DeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.deleteRelatedJobRuns"></a>

```csharp
public object DeleteRelatedJobRuns { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete_related_job_runs DatascienceJob#delete_related_job_runs}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#description DatascienceJob#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#display_name DatascienceJob#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#freeform_tags DatascienceJob#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#id DatascienceJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobArtifact`<sup>Optional</sup> <a name="JobArtifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobArtifact"></a>

```csharp
public string JobArtifact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_artifact DatascienceJob#job_artifact}.

---

##### `JobEnvironmentConfigurationDetails`<sup>Optional</sup> <a name="JobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobEnvironmentConfigurationDetails"></a>

```csharp
public DatascienceJobJobEnvironmentConfigurationDetails JobEnvironmentConfigurationDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

job_environment_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_configuration_details DatascienceJob#job_environment_configuration_details}

---

##### `JobLogConfigurationDetails`<sup>Optional</sup> <a name="JobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobLogConfigurationDetails"></a>

```csharp
public DatascienceJobJobLogConfigurationDetails JobLogConfigurationDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

job_log_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_log_configuration_details DatascienceJob#job_log_configuration_details}

---

##### `JobStorageMountConfigurationDetailsList`<sup>Optional</sup> <a name="JobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobStorageMountConfigurationDetailsList"></a>

```csharp
public object JobStorageMountConfigurationDetailsList { get; set; }
```

- *Type:* object

job_storage_mount_configuration_details_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_storage_mount_configuration_details_list DatascienceJob#job_storage_mount_configuration_details_list}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.timeouts"></a>

```csharp
public DatascienceJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#timeouts DatascienceJob#timeouts}

---

### DatascienceJobJobConfigurationDetails <a name="DatascienceJobJobConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobConfigurationDetails {
    string JobType,
    string CommandLineArguments = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string MaximumRuntimeInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.jobType">JobType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_type DatascienceJob#job_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.commandLineArguments">CommandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#command_line_arguments DatascienceJob#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#environment_variables DatascienceJob#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}. |

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.jobType"></a>

```csharp
public string JobType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_type DatascienceJob#job_type}.

---

##### `CommandLineArguments`<sup>Optional</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.commandLineArguments"></a>

```csharp
public string CommandLineArguments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#command_line_arguments DatascienceJob#command_line_arguments}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#environment_variables DatascienceJob#environment_variables}.

---

##### `MaximumRuntimeInMinutes`<sup>Optional</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```csharp
public string MaximumRuntimeInMinutes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}.

---

### DatascienceJobJobEnvironmentConfigurationDetails <a name="DatascienceJobJobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobEnvironmentConfigurationDetails {
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
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image DatascienceJob#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.jobEnvironmentType">JobEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_type DatascienceJob#job_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.cmd">Cmd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#cmd DatascienceJob#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.entrypoint">Entrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#entrypoint DatascienceJob#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageDigest">ImageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_digest DatascienceJob#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageSignatureId">ImageSignatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_signature_id DatascienceJob#image_signature_id}. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image DatascienceJob#image}.

---

##### `JobEnvironmentType`<sup>Required</sup> <a name="JobEnvironmentType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.jobEnvironmentType"></a>

```csharp
public string JobEnvironmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_type DatascienceJob#job_environment_type}.

---

##### `Cmd`<sup>Optional</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.cmd"></a>

```csharp
public string[] Cmd { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#cmd DatascienceJob#cmd}.

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.entrypoint"></a>

```csharp
public string[] Entrypoint { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#entrypoint DatascienceJob#entrypoint}.

---

##### `ImageDigest`<sup>Optional</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageDigest"></a>

```csharp
public string ImageDigest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_digest DatascienceJob#image_digest}.

---

##### `ImageSignatureId`<sup>Optional</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageSignatureId"></a>

```csharp
public string ImageSignatureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_signature_id DatascienceJob#image_signature_id}.

---

### DatascienceJobJobInfrastructureConfigurationDetails <a name="DatascienceJobJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobInfrastructureConfigurationDetails {
    double BlockStorageSizeInGbs,
    string JobInfrastructureType,
    string ShapeName,
    DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails JobShapeConfigDetails = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#block_storage_size_in_gbs DatascienceJob#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobInfrastructureType">JobInfrastructureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_type DatascienceJob#job_infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.shapeName">ShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#shape_name DatascienceJob#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobShapeConfigDetails">JobShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | job_shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}. |

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.blockStorageSizeInGbs"></a>

```csharp
public double BlockStorageSizeInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#block_storage_size_in_gbs DatascienceJob#block_storage_size_in_gbs}.

---

##### `JobInfrastructureType`<sup>Required</sup> <a name="JobInfrastructureType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobInfrastructureType"></a>

```csharp
public string JobInfrastructureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_type DatascienceJob#job_infrastructure_type}.

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.shapeName"></a>

```csharp
public string ShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#shape_name DatascienceJob#shape_name}.

---

##### `JobShapeConfigDetails`<sup>Optional</sup> <a name="JobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobShapeConfigDetails"></a>

```csharp
public DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails JobShapeConfigDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

job_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_shape_config_details DatascienceJob#job_shape_config_details}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}.

---

### DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails <a name="DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails {
    double MemoryInGbs = null,
    double Ocpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#memory_in_gbs DatascienceJob#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#ocpus DatascienceJob#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#memory_in_gbs DatascienceJob#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#ocpus DatascienceJob#ocpus}.

---

### DatascienceJobJobLogConfigurationDetails <a name="DatascienceJobJobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobLogConfigurationDetails {
    object EnableAutoLogCreation = null,
    object EnableLogging = null,
    string LogGroupId = null,
    string LogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_auto_log_creation DatascienceJob#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_logging DatascienceJob#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_group_id DatascienceJob#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logId">LogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_id DatascienceJob#log_id}. |

---

##### `EnableAutoLogCreation`<sup>Optional</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableAutoLogCreation"></a>

```csharp
public object EnableAutoLogCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_auto_log_creation DatascienceJob#enable_auto_log_creation}.

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_logging DatascienceJob#enable_logging}.

---

##### `LogGroupId`<sup>Optional</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_group_id DatascienceJob#log_group_id}.

---

##### `LogId`<sup>Optional</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logId"></a>

```csharp
public string LogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_id DatascienceJob#log_id}.

---

### DatascienceJobJobStorageMountConfigurationDetailsListStruct <a name="DatascienceJobJobStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobStorageMountConfigurationDetailsListStruct {
    string DestinationDirectoryName,
    string StorageType,
    string Bucket = null,
    string DestinationPath = null,
    string ExportId = null,
    string MountTargetId = null,
    string Namespace = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName">DestinationDirectoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_directory_name DatascienceJob#destination_directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#storage_type DatascienceJob#storage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#bucket DatascienceJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationPath">DestinationPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_path DatascienceJob#destination_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.exportId">ExportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#export_id DatascienceJob#export_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.mountTargetId">MountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#mount_target_id DatascienceJob#mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#namespace DatascienceJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#prefix DatascienceJob#prefix}. |

---

##### `DestinationDirectoryName`<sup>Required</sup> <a name="DestinationDirectoryName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName"></a>

```csharp
public string DestinationDirectoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_directory_name DatascienceJob#destination_directory_name}.

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#storage_type DatascienceJob#storage_type}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#bucket DatascienceJob#bucket}.

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationPath"></a>

```csharp
public string DestinationPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_path DatascienceJob#destination_path}.

---

##### `ExportId`<sup>Optional</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.exportId"></a>

```csharp
public string ExportId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#export_id DatascienceJob#export_id}.

---

##### `MountTargetId`<sup>Optional</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.mountTargetId"></a>

```csharp
public string MountTargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#mount_target_id DatascienceJob#mount_target_id}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#namespace DatascienceJob#namespace}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#prefix DatascienceJob#prefix}.

---

### DatascienceJobTimeouts <a name="DatascienceJobTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#create DatascienceJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete DatascienceJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#update DatascienceJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#create DatascienceJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete DatascienceJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#update DatascienceJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceJobJobConfigurationDetailsOutputReference <a name="DatascienceJobJobConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetCommandLineArguments">ResetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">ResetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommandLineArguments` <a name="ResetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```csharp
private void ResetCommandLineArguments()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetMaximumRuntimeInMinutes` <a name="ResetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```csharp
private void ResetMaximumRuntimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArgumentsInput">CommandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobTypeInput">JobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">MaximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobType">JobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandLineArgumentsInput`<sup>Optional</sup> <a name="CommandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```csharp
public string CommandLineArgumentsInput { get; }
```

- *Type:* string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `JobTypeInput`<sup>Optional</sup> <a name="JobTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobTypeInput"></a>

```csharp
public string JobTypeInput { get; }
```

- *Type:* string

---

##### `MaximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="MaximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```csharp
public string MaximumRuntimeInMinutesInput { get; }
```

- *Type:* string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```csharp
public string CommandLineArguments { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobType"></a>

```csharp
public string JobType { get; }
```

- *Type:* string

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```csharp
public string MaximumRuntimeInMinutes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobJobConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

---


### DatascienceJobJobEnvironmentConfigurationDetailsOutputReference <a name="DatascienceJobJobEnvironmentConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobEnvironmentConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetCmd">ResetCmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageDigest">ResetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageSignatureId">ResetImageSignatureId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCmd` <a name="ResetCmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetCmd"></a>

```csharp
private void ResetCmd()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetEntrypoint"></a>

```csharp
private void ResetEntrypoint()
```

##### `ResetImageDigest` <a name="ResetImageDigest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageDigest"></a>

```csharp
private void ResetImageDigest()
```

##### `ResetImageSignatureId` <a name="ResetImageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageSignatureId"></a>

```csharp
private void ResetImageSignatureId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmdInput">CmdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypointInput">EntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigestInput">ImageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureIdInput">ImageSignatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentTypeInput">JobEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmd">Cmd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint">Entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId">ImageSignatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType">JobEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CmdInput`<sup>Optional</sup> <a name="CmdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmdInput"></a>

```csharp
public string[] CmdInput { get; }
```

- *Type:* string[]

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypointInput"></a>

```csharp
public string[] EntrypointInput { get; }
```

- *Type:* string[]

---

##### `ImageDigestInput`<sup>Optional</sup> <a name="ImageDigestInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigestInput"></a>

```csharp
public string ImageDigestInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `ImageSignatureIdInput`<sup>Optional</sup> <a name="ImageSignatureIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureIdInput"></a>

```csharp
public string ImageSignatureIdInput { get; }
```

- *Type:* string

---

##### `JobEnvironmentTypeInput`<sup>Optional</sup> <a name="JobEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentTypeInput"></a>

```csharp
public string JobEnvironmentTypeInput { get; }
```

- *Type:* string

---

##### `Cmd`<sup>Required</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmd"></a>

```csharp
public string[] Cmd { get; }
```

- *Type:* string[]

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint"></a>

```csharp
public string[] Entrypoint { get; }
```

- *Type:* string[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest"></a>

```csharp
public string ImageDigest { get; }
```

- *Type:* string

---

##### `ImageSignatureId`<sup>Required</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```csharp
public string ImageSignatureId { get; }
```

- *Type:* string

---

##### `JobEnvironmentType`<sup>Required</sup> <a name="JobEnvironmentType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType"></a>

```csharp
public string JobEnvironmentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobJobEnvironmentConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

---


### DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference <a name="DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---


### DatascienceJobJobInfrastructureConfigurationDetailsOutputReference <a name="DatascienceJobJobInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobInfrastructureConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails">PutJobShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetJobShapeConfigDetails">ResetJobShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobShapeConfigDetails` <a name="PutJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails"></a>

```csharp
private void PutJobShapeConfigDetails(DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---

##### `ResetJobShapeConfigDetails` <a name="ResetJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetJobShapeConfigDetails"></a>

```csharp
private void ResetJobShapeConfigDetails()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails">JobShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">BlockStorageSizeInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureTypeInput">JobInfrastructureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetailsInput">JobShapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput">ShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType">JobInfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobShapeConfigDetails`<sup>Required</sup> <a name="JobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails"></a>

```csharp
public DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference JobShapeConfigDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference</a>

---

##### `BlockStorageSizeInGbsInput`<sup>Optional</sup> <a name="BlockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```csharp
public double BlockStorageSizeInGbsInput { get; }
```

- *Type:* double

---

##### `JobInfrastructureTypeInput`<sup>Optional</sup> <a name="JobInfrastructureTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureTypeInput"></a>

```csharp
public string JobInfrastructureTypeInput { get; }
```

- *Type:* string

---

##### `JobShapeConfigDetailsInput`<sup>Optional</sup> <a name="JobShapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetailsInput"></a>

```csharp
public DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails JobShapeConfigDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput"></a>

```csharp
public string ShapeNameInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```csharp
public double BlockStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `JobInfrastructureType`<sup>Required</sup> <a name="JobInfrastructureType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType"></a>

```csharp
public string JobInfrastructureType { get; }
```

- *Type:* string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobJobInfrastructureConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

---


### DatascienceJobJobLogConfigurationDetailsOutputReference <a name="DatascienceJobJobLogConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobLogConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation">ResetEnableAutoLogCreation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogGroupId">ResetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogId">ResetLogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableAutoLogCreation` <a name="ResetEnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation"></a>

```csharp
private void ResetEnableAutoLogCreation()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetLogGroupId` <a name="ResetLogGroupId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogGroupId"></a>

```csharp
private void ResetLogGroupId()
```

##### `ResetLogId` <a name="ResetLogId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogId"></a>

```csharp
private void ResetLogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput">EnableAutoLogCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logIdInput">LogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableAutoLogCreationInput`<sup>Optional</sup> <a name="EnableAutoLogCreationInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```csharp
public object EnableAutoLogCreationInput { get; }
```

- *Type:* object

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logIdInput"></a>

```csharp
public string LogIdInput { get; }
```

- *Type:* string

---

##### `EnableAutoLogCreation`<sup>Required</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation"></a>

```csharp
public object EnableAutoLogCreation { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatascienceJobJobLogConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

---


### DatascienceJobJobStorageMountConfigurationDetailsListStructList <a name="DatascienceJobJobStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobStorageMountConfigurationDetailsListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.get"></a>

```csharp
private DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference <a name="DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetExportId">ResetExportId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId">ResetMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath"></a>

```csharp
private void ResetDestinationPath()
```

##### `ResetExportId` <a name="ResetExportId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetExportId"></a>

```csharp
private void ResetExportId()
```

##### `ResetMountTargetId` <a name="ResetMountTargetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId"></a>

```csharp
private void ResetMountTargetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPrefix` <a name="ResetPrefix" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput">DestinationDirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput">ExportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput">MountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">DestinationDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">DestinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId">ExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DestinationDirectoryNameInput`<sup>Optional</sup> <a name="DestinationDirectoryNameInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput"></a>

```csharp
public string DestinationDirectoryNameInput { get; }
```

- *Type:* string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput"></a>

```csharp
public string DestinationPathInput { get; }
```

- *Type:* string

---

##### `ExportIdInput`<sup>Optional</sup> <a name="ExportIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput"></a>

```csharp
public string ExportIdInput { get; }
```

- *Type:* string

---

##### `MountTargetIdInput`<sup>Optional</sup> <a name="MountTargetIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput"></a>

```csharp
public string MountTargetIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DestinationDirectoryName`<sup>Required</sup> <a name="DestinationDirectoryName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```csharp
public string DestinationDirectoryName { get; }
```

- *Type:* string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```csharp
public string DestinationPath { get; }
```

- *Type:* string

---

##### `ExportId`<sup>Required</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```csharp
public string ExportId { get; }
```

- *Type:* string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```csharp
public string MountTargetId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatascienceJobTimeoutsOutputReference <a name="DatascienceJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatascienceJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



