# `managementAgentManagementAgentDataSource` Submodule <a name="`managementAgentManagementAgentDataSource` Submodule" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementAgentManagementAgentDataSource <a name="ManagementAgentManagementAgentDataSource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source oci_management_agent_management_agent_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentDataSource(Construct Scope, string Id, ManagementAgentManagementAgentDataSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig">ManagementAgentManagementAgentDataSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig">ManagementAgentManagementAgentDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putMetricDimensions">PutMetricDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetAllowMetrics">ResetAllowMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetConnectionTimeout">ResetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetMetricDimensions">ResetMetricDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetProxyUrl">ResetProxyUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadDataLimitInKilobytes">ResetReadDataLimitInKilobytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadTimeout">ResetReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetScheduleMins">ResetScheduleMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricDimensions` <a name="PutMetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putMetricDimensions"></a>

```csharp
private void PutMetricDimensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putMetricDimensions.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagementAgentManagementAgentDataSourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>

---

##### `ResetAllowMetrics` <a name="ResetAllowMetrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetAllowMetrics"></a>

```csharp
private void ResetAllowMetrics()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetConnectionTimeout"></a>

```csharp
private void ResetConnectionTimeout()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetricDimensions` <a name="ResetMetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetMetricDimensions"></a>

```csharp
private void ResetMetricDimensions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetProxyUrl` <a name="ResetProxyUrl" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetProxyUrl"></a>

```csharp
private void ResetProxyUrl()
```

##### `ResetReadDataLimitInKilobytes` <a name="ResetReadDataLimitInKilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadDataLimitInKilobytes"></a>

```csharp
private void ResetReadDataLimitInKilobytes()
```

##### `ResetReadTimeout` <a name="ResetReadTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadTimeout"></a>

```csharp
private void ResetReadTimeout()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetResourceGroup"></a>

```csharp
private void ResetResourceGroup()
```

##### `ResetScheduleMins` <a name="ResetScheduleMins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetScheduleMins"></a>

```csharp
private void ResetScheduleMins()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementAgentManagementAgentDataSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementAgentManagementAgentDataSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementAgentManagementAgentDataSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementAgentManagementAgentDataSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagementAgentManagementAgentDataSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagementAgentManagementAgentDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagementAgentManagementAgentDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dataSourceKey">DataSourceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.isDaemonSet">IsDaemonSet</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensions">MetricDimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList">ManagementAgentManagementAgentDataSourceMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimit">ReadDataLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference">ManagementAgentManagementAgentDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetricsInput">AllowMetricsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensionsInput">MetricDimensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrlInput">ProxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytesInput">ReadDataLimitInKilobytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeoutInput">ReadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMinsInput">ScheduleMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetrics">AllowMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes">ReadDataLimitInKilobytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeout">ReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMins">ScheduleMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataSourceKey`<sup>Required</sup> <a name="DataSourceKey" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dataSourceKey"></a>

```csharp
public string DataSourceKey { get; }
```

- *Type:* string

---

##### `IsDaemonSet`<sup>Required</sup> <a name="IsDaemonSet" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.isDaemonSet"></a>

```csharp
public IResolvable IsDaemonSet { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MetricDimensions`<sup>Required</sup> <a name="MetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensions"></a>

```csharp
public ManagementAgentManagementAgentDataSourceMetricDimensionsList MetricDimensions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList">ManagementAgentManagementAgentDataSourceMetricDimensionsList</a>

---

##### `ReadDataLimit`<sup>Required</sup> <a name="ReadDataLimit" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimit"></a>

```csharp
public double ReadDataLimit { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeouts"></a>

```csharp
public ManagementAgentManagementAgentDataSourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference">ManagementAgentManagementAgentDataSourceTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AllowMetricsInput`<sup>Optional</sup> <a name="AllowMetricsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetricsInput"></a>

```csharp
public string AllowMetricsInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeoutInput"></a>

```csharp
public double ConnectionTimeoutInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentIdInput"></a>

```csharp
public string ManagementAgentIdInput { get; }
```

- *Type:* string

---

##### `MetricDimensionsInput`<sup>Optional</sup> <a name="MetricDimensionsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensionsInput"></a>

```csharp
public object MetricDimensionsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProxyUrlInput`<sup>Optional</sup> <a name="ProxyUrlInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrlInput"></a>

```csharp
public string ProxyUrlInput { get; }
```

- *Type:* string

---

##### `ReadDataLimitInKilobytesInput`<sup>Optional</sup> <a name="ReadDataLimitInKilobytesInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytesInput"></a>

```csharp
public double ReadDataLimitInKilobytesInput { get; }
```

- *Type:* double

---

##### `ReadTimeoutInput`<sup>Optional</sup> <a name="ReadTimeoutInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeoutInput"></a>

```csharp
public double ReadTimeoutInput { get; }
```

- *Type:* double

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroupInput"></a>

```csharp
public string ResourceGroupInput { get; }
```

- *Type:* string

---

##### `ScheduleMinsInput`<sup>Optional</sup> <a name="ScheduleMinsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMinsInput"></a>

```csharp
public double ScheduleMinsInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AllowMetrics`<sup>Required</sup> <a name="AllowMetrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetrics"></a>

```csharp
public string AllowMetrics { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ProxyUrl`<sup>Required</sup> <a name="ProxyUrl" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; }
```

- *Type:* string

---

##### `ReadDataLimitInKilobytes`<sup>Required</sup> <a name="ReadDataLimitInKilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes"></a>

```csharp
public double ReadDataLimitInKilobytes { get; }
```

- *Type:* double

---

##### `ReadTimeout`<sup>Required</sup> <a name="ReadTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeout"></a>

```csharp
public double ReadTimeout { get; }
```

- *Type:* double

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; }
```

- *Type:* string

---

##### `ScheduleMins`<sup>Required</sup> <a name="ScheduleMins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMins"></a>

```csharp
public double ScheduleMins { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementAgentManagementAgentDataSourceConfig <a name="ManagementAgentManagementAgentDataSourceConfig" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentDataSourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ManagementAgentId,
    string Name,
    string Type,
    string Url,
    string AllowMetrics = null,
    double ConnectionTimeout = null,
    string Id = null,
    object MetricDimensions = null,
    string Namespace = null,
    string ProxyUrl = null,
    double ReadDataLimitInKilobytes = null,
    double ReadTimeout = null,
    string ResourceGroup = null,
    double ScheduleMins = null,
    ManagementAgentManagementAgentDataSourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.allowMetrics">AllowMetrics</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.metricDimensions">MetricDimensions</a></code> | <code>object</code> | metric_dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readDataLimitInKilobytes">ReadDataLimitInKilobytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readTimeout">ReadTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.scheduleMins">ScheduleMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}.

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}.

---

##### `AllowMetrics`<sup>Optional</sup> <a name="AllowMetrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.allowMetrics"></a>

```csharp
public string AllowMetrics { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}.

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricDimensions`<sup>Optional</sup> <a name="MetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.metricDimensions"></a>

```csharp
public object MetricDimensions { get; set; }
```

- *Type:* object

metric_dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#metric_dimensions ManagementAgentManagementAgentDataSource#metric_dimensions}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}.

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}.

---

##### `ReadDataLimitInKilobytes`<sup>Optional</sup> <a name="ReadDataLimitInKilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readDataLimitInKilobytes"></a>

```csharp
public double ReadDataLimitInKilobytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}.

---

##### `ReadTimeout`<sup>Optional</sup> <a name="ReadTimeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readTimeout"></a>

```csharp
public double ReadTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}.

---

##### `ScheduleMins`<sup>Optional</sup> <a name="ScheduleMins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.scheduleMins"></a>

```csharp
public double ScheduleMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.timeouts"></a>

```csharp
public ManagementAgentManagementAgentDataSourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#timeouts ManagementAgentManagementAgentDataSource#timeouts}

---

### ManagementAgentManagementAgentDataSourceMetricDimensions <a name="ManagementAgentManagementAgentDataSourceMetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentDataSourceMetricDimensions {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#value ManagementAgentManagementAgentDataSource#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#value ManagementAgentManagementAgentDataSource#value}.

---

### ManagementAgentManagementAgentDataSourceTimeouts <a name="ManagementAgentManagementAgentDataSourceTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentDataSourceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#create ManagementAgentManagementAgentDataSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#delete ManagementAgentManagementAgentDataSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#update ManagementAgentManagementAgentDataSource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#create ManagementAgentManagementAgentDataSource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#delete ManagementAgentManagementAgentDataSource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#update ManagementAgentManagementAgentDataSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementAgentManagementAgentDataSourceMetricDimensionsList <a name="ManagementAgentManagementAgentDataSourceMetricDimensionsList" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentDataSourceMetricDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.get"></a>

```csharp
private ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference <a name="ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagementAgentManagementAgentDataSourceTimeoutsOutputReference <a name="ManagementAgentManagementAgentDataSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentDataSourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



