# `integrationIntegrationInstance` Submodule <a name="`integrationIntegrationInstance` Submodule" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationIntegrationInstance <a name="IntegrationIntegrationInstance" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance oci_integration_integration_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstance(Construct Scope, string Id, IntegrationIntegrationInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig">IntegrationIntegrationInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig">IntegrationIntegrationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putAlternateCustomEndpoints">PutAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putCustomEndpoint">PutCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putNetworkEndpointDetails">PutNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetAlternateCustomEndpoints">ResetAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetConsumptionModel">ResetConsumptionModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetCustomEndpoint">ResetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDomainId">ResetDomainId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetEnableProcessAutomationTrigger">ResetEnableProcessAutomationTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetExtendDataRetentionTrigger">ResetExtendDataRetentionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFailoverTrigger">ResetFailoverTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIdcsAt">ResetIdcsAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsDisasterRecoveryEnabled">ResetIsDisasterRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsFileServerEnabled">ResetIsFileServerEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsVisualBuilderEnabled">ResetIsVisualBuilderEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetNetworkEndpointDetails">ResetNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlternateCustomEndpoints` <a name="PutAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putAlternateCustomEndpoints"></a>

```csharp
private void PutAlternateCustomEndpoints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putAlternateCustomEndpoints.parameter.value"></a>

- *Type:* object

---

##### `PutCustomEndpoint` <a name="PutCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putCustomEndpoint"></a>

```csharp
private void PutCustomEndpoint(IntegrationIntegrationInstanceCustomEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

---

##### `PutNetworkEndpointDetails` <a name="PutNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putNetworkEndpointDetails"></a>

```csharp
private void PutNetworkEndpointDetails(IntegrationIntegrationInstanceNetworkEndpointDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putNetworkEndpointDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(IntegrationIntegrationInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

---

##### `ResetAlternateCustomEndpoints` <a name="ResetAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetAlternateCustomEndpoints"></a>

```csharp
private void ResetAlternateCustomEndpoints()
```

##### `ResetConsumptionModel` <a name="ResetConsumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetConsumptionModel"></a>

```csharp
private void ResetConsumptionModel()
```

##### `ResetCustomEndpoint` <a name="ResetCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetCustomEndpoint"></a>

```csharp
private void ResetCustomEndpoint()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDomainId` <a name="ResetDomainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDomainId"></a>

```csharp
private void ResetDomainId()
```

##### `ResetEnableProcessAutomationTrigger` <a name="ResetEnableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetEnableProcessAutomationTrigger"></a>

```csharp
private void ResetEnableProcessAutomationTrigger()
```

##### `ResetExtendDataRetentionTrigger` <a name="ResetExtendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetExtendDataRetentionTrigger"></a>

```csharp
private void ResetExtendDataRetentionTrigger()
```

##### `ResetFailoverTrigger` <a name="ResetFailoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFailoverTrigger"></a>

```csharp
private void ResetFailoverTrigger()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdcsAt` <a name="ResetIdcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIdcsAt"></a>

```csharp
private void ResetIdcsAt()
```

##### `ResetIsDisasterRecoveryEnabled` <a name="ResetIsDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsDisasterRecoveryEnabled"></a>

```csharp
private void ResetIsDisasterRecoveryEnabled()
```

##### `ResetIsFileServerEnabled` <a name="ResetIsFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsFileServerEnabled"></a>

```csharp
private void ResetIsFileServerEnabled()
```

##### `ResetIsVisualBuilderEnabled` <a name="ResetIsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsVisualBuilderEnabled"></a>

```csharp
private void ResetIsVisualBuilderEnabled()
```

##### `ResetNetworkEndpointDetails` <a name="ResetNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetNetworkEndpointDetails"></a>

```csharp
private void ResetNetworkEndpointDetails()
```

##### `ResetShape` <a name="ResetShape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetShape"></a>

```csharp
private void ResetShape()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IntegrationIntegrationInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IntegrationIntegrationInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IntegrationIntegrationInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IntegrationIntegrationInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationIntegrationInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationIntegrationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationIntegrationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpoints">AlternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList">IntegrationIntegrationInstanceAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.attachments">Attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList">IntegrationIntegrationInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference">IntegrationIntegrationInstanceCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dataRetentionPeriod">DataRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.disasterRecoveryDetails">DisasterRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsInfo">IdcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList">IntegrationIntegrationInstanceIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceDesignTimeUrl">InstanceDesignTimeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetails">NetworkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference">IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.privateEndpointOutboundConnection">PrivateEndpointOutboundConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference">IntegrationIntegrationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpointsInput">AlternateCustomEndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModelInput">ConsumptionModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpointInput">CustomEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTriggerInput">EnableProcessAutomationTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTriggerInput">ExtendDataRetentionTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTriggerInput">FailoverTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAtInput">IdcsAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceTypeInput">IntegrationInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByolInput">IsByolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabledInput">IsDisasterRecoveryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabledInput">IsFileServerEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabledInput">IsVisualBuilderEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacksInput">MessagePacksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetailsInput">NetworkEndpointDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModel">ConsumptionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTrigger">EnableProcessAutomationTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTrigger">ExtendDataRetentionTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTrigger">FailoverTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAt">IdcsAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceType">IntegrationInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByol">IsByol</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabled">IsDisasterRecoveryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabled">IsFileServerEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabled">IsVisualBuilderEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacks">MessagePacks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AlternateCustomEndpoints`<sup>Required</sup> <a name="AlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpoints"></a>

```csharp
public IntegrationIntegrationInstanceAlternateCustomEndpointsList AlternateCustomEndpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList">IntegrationIntegrationInstanceAlternateCustomEndpointsList</a>

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.attachments"></a>

```csharp
public IntegrationIntegrationInstanceAttachmentsList Attachments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList">IntegrationIntegrationInstanceAttachmentsList</a>

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpoint"></a>

```csharp
public IntegrationIntegrationInstanceCustomEndpointOutputReference CustomEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference">IntegrationIntegrationInstanceCustomEndpointOutputReference</a>

---

##### `DataRetentionPeriod`<sup>Required</sup> <a name="DataRetentionPeriod" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dataRetentionPeriod"></a>

```csharp
public string DataRetentionPeriod { get; }
```

- *Type:* string

---

##### `DisasterRecoveryDetails`<sup>Required</sup> <a name="DisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.disasterRecoveryDetails"></a>

```csharp
public IntegrationIntegrationInstanceDisasterRecoveryDetailsList DisasterRecoveryDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsList</a>

---

##### `IdcsInfo`<sup>Required</sup> <a name="IdcsInfo" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsInfo"></a>

```csharp
public IntegrationIntegrationInstanceIdcsInfoList IdcsInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList">IntegrationIntegrationInstanceIdcsInfoList</a>

---

##### `InstanceDesignTimeUrl`<sup>Required</sup> <a name="InstanceDesignTimeUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceDesignTimeUrl"></a>

```csharp
public string InstanceDesignTimeUrl { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NetworkEndpointDetails`<sup>Required</sup> <a name="NetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetails"></a>

```csharp
public IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference NetworkEndpointDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference">IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference</a>

---

##### `PrivateEndpointOutboundConnection`<sup>Required</sup> <a name="PrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.privateEndpointOutboundConnection"></a>

```csharp
public IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList PrivateEndpointOutboundConnection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a>

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeouts"></a>

```csharp
public IntegrationIntegrationInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference">IntegrationIntegrationInstanceTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AlternateCustomEndpointsInput`<sup>Optional</sup> <a name="AlternateCustomEndpointsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpointsInput"></a>

```csharp
public object AlternateCustomEndpointsInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConsumptionModelInput`<sup>Optional</sup> <a name="ConsumptionModelInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModelInput"></a>

```csharp
public string ConsumptionModelInput { get; }
```

- *Type:* string

---

##### `CustomEndpointInput`<sup>Optional</sup> <a name="CustomEndpointInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpointInput"></a>

```csharp
public IntegrationIntegrationInstanceCustomEndpoint CustomEndpointInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `EnableProcessAutomationTriggerInput`<sup>Optional</sup> <a name="EnableProcessAutomationTriggerInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTriggerInput"></a>

```csharp
public double EnableProcessAutomationTriggerInput { get; }
```

- *Type:* double

---

##### `ExtendDataRetentionTriggerInput`<sup>Optional</sup> <a name="ExtendDataRetentionTriggerInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTriggerInput"></a>

```csharp
public double ExtendDataRetentionTriggerInput { get; }
```

- *Type:* double

---

##### `FailoverTriggerInput`<sup>Optional</sup> <a name="FailoverTriggerInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTriggerInput"></a>

```csharp
public double FailoverTriggerInput { get; }
```

- *Type:* double

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdcsAtInput`<sup>Optional</sup> <a name="IdcsAtInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAtInput"></a>

```csharp
public string IdcsAtInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationInstanceTypeInput`<sup>Optional</sup> <a name="IntegrationInstanceTypeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceTypeInput"></a>

```csharp
public string IntegrationInstanceTypeInput { get; }
```

- *Type:* string

---

##### `IsByolInput`<sup>Optional</sup> <a name="IsByolInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByolInput"></a>

```csharp
public object IsByolInput { get; }
```

- *Type:* object

---

##### `IsDisasterRecoveryEnabledInput`<sup>Optional</sup> <a name="IsDisasterRecoveryEnabledInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabledInput"></a>

```csharp
public object IsDisasterRecoveryEnabledInput { get; }
```

- *Type:* object

---

##### `IsFileServerEnabledInput`<sup>Optional</sup> <a name="IsFileServerEnabledInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabledInput"></a>

```csharp
public object IsFileServerEnabledInput { get; }
```

- *Type:* object

---

##### `IsVisualBuilderEnabledInput`<sup>Optional</sup> <a name="IsVisualBuilderEnabledInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabledInput"></a>

```csharp
public object IsVisualBuilderEnabledInput { get; }
```

- *Type:* object

---

##### `MessagePacksInput`<sup>Optional</sup> <a name="MessagePacksInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacksInput"></a>

```csharp
public double MessagePacksInput { get; }
```

- *Type:* double

---

##### `NetworkEndpointDetailsInput`<sup>Optional</sup> <a name="NetworkEndpointDetailsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetailsInput"></a>

```csharp
public IntegrationIntegrationInstanceNetworkEndpointDetails NetworkEndpointDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConsumptionModel`<sup>Required</sup> <a name="ConsumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModel"></a>

```csharp
public string ConsumptionModel { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EnableProcessAutomationTrigger`<sup>Required</sup> <a name="EnableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTrigger"></a>

```csharp
public double EnableProcessAutomationTrigger { get; }
```

- *Type:* double

---

##### `ExtendDataRetentionTrigger`<sup>Required</sup> <a name="ExtendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTrigger"></a>

```csharp
public double ExtendDataRetentionTrigger { get; }
```

- *Type:* double

---

##### `FailoverTrigger`<sup>Required</sup> <a name="FailoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTrigger"></a>

```csharp
public double FailoverTrigger { get; }
```

- *Type:* double

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsAt`<sup>Required</sup> <a name="IdcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAt"></a>

```csharp
public string IdcsAt { get; }
```

- *Type:* string

---

##### `IntegrationInstanceType`<sup>Required</sup> <a name="IntegrationInstanceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceType"></a>

```csharp
public string IntegrationInstanceType { get; }
```

- *Type:* string

---

##### `IsByol`<sup>Required</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByol"></a>

```csharp
public object IsByol { get; }
```

- *Type:* object

---

##### `IsDisasterRecoveryEnabled`<sup>Required</sup> <a name="IsDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabled"></a>

```csharp
public object IsDisasterRecoveryEnabled { get; }
```

- *Type:* object

---

##### `IsFileServerEnabled`<sup>Required</sup> <a name="IsFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabled"></a>

```csharp
public object IsFileServerEnabled { get; }
```

- *Type:* object

---

##### `IsVisualBuilderEnabled`<sup>Required</sup> <a name="IsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabled"></a>

```csharp
public object IsVisualBuilderEnabled { get; }
```

- *Type:* object

---

##### `MessagePacks`<sup>Required</sup> <a name="MessagePacks" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacks"></a>

```csharp
public double MessagePacks { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationIntegrationInstanceAlternateCustomEndpoints <a name="IntegrationIntegrationInstanceAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceAlternateCustomEndpoints {
    string Hostname,
    string CertificateSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}.

---

##### `CertificateSecretId`<sup>Optional</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}.

---

### IntegrationIntegrationInstanceAttachments <a name="IntegrationIntegrationInstanceAttachments" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceAttachments {

};
```


### IntegrationIntegrationInstanceConfig <a name="IntegrationIntegrationInstanceConfig" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    string IntegrationInstanceType,
    object IsByol,
    double MessagePacks,
    object AlternateCustomEndpoints = null,
    string ConsumptionModel = null,
    IntegrationIntegrationInstanceCustomEndpoint CustomEndpoint = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DomainId = null,
    double EnableProcessAutomationTrigger = null,
    double ExtendDataRetentionTrigger = null,
    double FailoverTrigger = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string IdcsAt = null,
    object IsDisasterRecoveryEnabled = null,
    object IsFileServerEnabled = null,
    object IsVisualBuilderEnabled = null,
    IntegrationIntegrationInstanceNetworkEndpointDetails NetworkEndpointDetails = null,
    string Shape = null,
    string State = null,
    IntegrationIntegrationInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#compartment_id IntegrationIntegrationInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#display_name IntegrationIntegrationInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.integrationInstanceType">IntegrationInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#integration_instance_type IntegrationIntegrationInstance#integration_instance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isByol">IsByol</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_byol IntegrationIntegrationInstance#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.messagePacks">MessagePacks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#message_packs IntegrationIntegrationInstance#message_packs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.alternateCustomEndpoints">AlternateCustomEndpoints</a></code> | <code>object</code> | alternate_custom_endpoints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.consumptionModel">ConsumptionModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#consumption_model IntegrationIntegrationInstance#consumption_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#defined_tags IntegrationIntegrationInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.domainId">DomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#domain_id IntegrationIntegrationInstance#domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.enableProcessAutomationTrigger">EnableProcessAutomationTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#enable_process_automation_trigger IntegrationIntegrationInstance#enable_process_automation_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.extendDataRetentionTrigger">ExtendDataRetentionTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#extend_data_retention_trigger IntegrationIntegrationInstance#extend_data_retention_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.failoverTrigger">FailoverTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#failover_trigger IntegrationIntegrationInstance#failover_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#freeform_tags IntegrationIntegrationInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.idcsAt">IdcsAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#idcs_at IntegrationIntegrationInstance#idcs_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isDisasterRecoveryEnabled">IsDisasterRecoveryEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_disaster_recovery_enabled IntegrationIntegrationInstance#is_disaster_recovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isFileServerEnabled">IsFileServerEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_file_server_enabled IntegrationIntegrationInstance#is_file_server_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isVisualBuilderEnabled">IsVisualBuilderEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_visual_builder_enabled IntegrationIntegrationInstance#is_visual_builder_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.networkEndpointDetails">NetworkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | network_endpoint_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#shape IntegrationIntegrationInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#state IntegrationIntegrationInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#compartment_id IntegrationIntegrationInstance#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#display_name IntegrationIntegrationInstance#display_name}.

---

##### `IntegrationInstanceType`<sup>Required</sup> <a name="IntegrationInstanceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.integrationInstanceType"></a>

```csharp
public string IntegrationInstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#integration_instance_type IntegrationIntegrationInstance#integration_instance_type}.

---

##### `IsByol`<sup>Required</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isByol"></a>

```csharp
public object IsByol { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_byol IntegrationIntegrationInstance#is_byol}.

---

##### `MessagePacks`<sup>Required</sup> <a name="MessagePacks" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.messagePacks"></a>

```csharp
public double MessagePacks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#message_packs IntegrationIntegrationInstance#message_packs}.

---

##### `AlternateCustomEndpoints`<sup>Optional</sup> <a name="AlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.alternateCustomEndpoints"></a>

```csharp
public object AlternateCustomEndpoints { get; set; }
```

- *Type:* object

alternate_custom_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#alternate_custom_endpoints IntegrationIntegrationInstance#alternate_custom_endpoints}

---

##### `ConsumptionModel`<sup>Optional</sup> <a name="ConsumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.consumptionModel"></a>

```csharp
public string ConsumptionModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#consumption_model IntegrationIntegrationInstance#consumption_model}.

---

##### `CustomEndpoint`<sup>Optional</sup> <a name="CustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.customEndpoint"></a>

```csharp
public IntegrationIntegrationInstanceCustomEndpoint CustomEndpoint { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#custom_endpoint IntegrationIntegrationInstance#custom_endpoint}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#defined_tags IntegrationIntegrationInstance#defined_tags}.

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#domain_id IntegrationIntegrationInstance#domain_id}.

---

##### `EnableProcessAutomationTrigger`<sup>Optional</sup> <a name="EnableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.enableProcessAutomationTrigger"></a>

```csharp
public double EnableProcessAutomationTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#enable_process_automation_trigger IntegrationIntegrationInstance#enable_process_automation_trigger}.

---

##### `ExtendDataRetentionTrigger`<sup>Optional</sup> <a name="ExtendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.extendDataRetentionTrigger"></a>

```csharp
public double ExtendDataRetentionTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#extend_data_retention_trigger IntegrationIntegrationInstance#extend_data_retention_trigger}.

---

##### `FailoverTrigger`<sup>Optional</sup> <a name="FailoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.failoverTrigger"></a>

```csharp
public double FailoverTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#failover_trigger IntegrationIntegrationInstance#failover_trigger}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#freeform_tags IntegrationIntegrationInstance#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdcsAt`<sup>Optional</sup> <a name="IdcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.idcsAt"></a>

```csharp
public string IdcsAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#idcs_at IntegrationIntegrationInstance#idcs_at}.

---

##### `IsDisasterRecoveryEnabled`<sup>Optional</sup> <a name="IsDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isDisasterRecoveryEnabled"></a>

```csharp
public object IsDisasterRecoveryEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_disaster_recovery_enabled IntegrationIntegrationInstance#is_disaster_recovery_enabled}.

---

##### `IsFileServerEnabled`<sup>Optional</sup> <a name="IsFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isFileServerEnabled"></a>

```csharp
public object IsFileServerEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_file_server_enabled IntegrationIntegrationInstance#is_file_server_enabled}.

---

##### `IsVisualBuilderEnabled`<sup>Optional</sup> <a name="IsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isVisualBuilderEnabled"></a>

```csharp
public object IsVisualBuilderEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_visual_builder_enabled IntegrationIntegrationInstance#is_visual_builder_enabled}.

---

##### `NetworkEndpointDetails`<sup>Optional</sup> <a name="NetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.networkEndpointDetails"></a>

```csharp
public IntegrationIntegrationInstanceNetworkEndpointDetails NetworkEndpointDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

network_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_details IntegrationIntegrationInstance#network_endpoint_details}

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#shape IntegrationIntegrationInstance#shape}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#state IntegrationIntegrationInstance#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.timeouts"></a>

```csharp
public IntegrationIntegrationInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#timeouts IntegrationIntegrationInstance#timeouts}

---

### IntegrationIntegrationInstanceCustomEndpoint <a name="IntegrationIntegrationInstanceCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceCustomEndpoint {
    string DnsZoneName,
    string Hostname,
    string CertificateSecretId = null,
    string DnsType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsZoneName">DnsZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_zone_name IntegrationIntegrationInstance#dns_zone_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsType">DnsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_type IntegrationIntegrationInstance#dns_type}. |

---

##### `DnsZoneName`<sup>Required</sup> <a name="DnsZoneName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsZoneName"></a>

```csharp
public string DnsZoneName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_zone_name IntegrationIntegrationInstance#dns_zone_name}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}.

---

##### `CertificateSecretId`<sup>Optional</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}.

---

##### `DnsType`<sup>Optional</sup> <a name="DnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsType"></a>

```csharp
public string DnsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_type IntegrationIntegrationInstance#dns_type}.

---

### IntegrationIntegrationInstanceDisasterRecoveryDetails <a name="IntegrationIntegrationInstanceDisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceDisasterRecoveryDetails {

};
```


### IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails {

};
```


### IntegrationIntegrationInstanceIdcsInfo <a name="IntegrationIntegrationInstanceIdcsInfo" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceIdcsInfo {

};
```


### IntegrationIntegrationInstanceNetworkEndpointDetails <a name="IntegrationIntegrationInstanceNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceNetworkEndpointDetails {
    string NetworkEndpointType,
    string[] AllowlistedHttpIps = null,
    object AllowlistedHttpVcns = null,
    object IsIntegrationVcnAllowlisted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.networkEndpointType">NetworkEndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_type IntegrationIntegrationInstance#network_endpoint_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpIps">AllowlistedHttpIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_http_ips IntegrationIntegrationInstance#allowlisted_http_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpVcns">AllowlistedHttpVcns</a></code> | <code>object</code> | allowlisted_http_vcns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.isIntegrationVcnAllowlisted">IsIntegrationVcnAllowlisted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_integration_vcn_allowlisted IntegrationIntegrationInstance#is_integration_vcn_allowlisted}. |

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.networkEndpointType"></a>

```csharp
public string NetworkEndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_type IntegrationIntegrationInstance#network_endpoint_type}.

---

##### `AllowlistedHttpIps`<sup>Optional</sup> <a name="AllowlistedHttpIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpIps"></a>

```csharp
public string[] AllowlistedHttpIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_http_ips IntegrationIntegrationInstance#allowlisted_http_ips}.

---

##### `AllowlistedHttpVcns`<sup>Optional</sup> <a name="AllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpVcns"></a>

```csharp
public object AllowlistedHttpVcns { get; set; }
```

- *Type:* object

allowlisted_http_vcns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_http_vcns IntegrationIntegrationInstance#allowlisted_http_vcns}

---

##### `IsIntegrationVcnAllowlisted`<sup>Optional</sup> <a name="IsIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.isIntegrationVcnAllowlisted"></a>

```csharp
public object IsIntegrationVcnAllowlisted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_integration_vcn_allowlisted IntegrationIntegrationInstance#is_integration_vcn_allowlisted}.

---

### IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns {
    string Id,
    string[] AllowlistedIps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.allowlistedIps">AllowlistedIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_ips IntegrationIntegrationInstance#allowlisted_ips}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AllowlistedIps`<sup>Optional</sup> <a name="AllowlistedIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.allowlistedIps"></a>

```csharp
public string[] AllowlistedIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_ips IntegrationIntegrationInstance#allowlisted_ips}.

---

### IntegrationIntegrationInstancePrivateEndpointOutboundConnection <a name="IntegrationIntegrationInstancePrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstancePrivateEndpointOutboundConnection {

};
```


### IntegrationIntegrationInstanceTimeouts <a name="IntegrationIntegrationInstanceTimeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#create IntegrationIntegrationInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#delete IntegrationIntegrationInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#update IntegrationIntegrationInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#create IntegrationIntegrationInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#delete IntegrationIntegrationInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#update IntegrationIntegrationInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationIntegrationInstanceAlternateCustomEndpointsList <a name="IntegrationIntegrationInstanceAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceAlternateCustomEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.get"></a>

```csharp
private IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference <a name="IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId">ResetCertificateSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateSecretId` <a name="ResetCertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId"></a>

```csharp
private void ResetCertificateSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType">DnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName">DnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType">ManagedType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput">CertificateSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```csharp
public double CertificateSecretVersion { get; }
```

- *Type:* double

---

##### `DnsType`<sup>Required</sup> <a name="DnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType"></a>

```csharp
public string DnsType { get; }
```

- *Type:* string

---

##### `DnsZoneName`<sup>Required</sup> <a name="DnsZoneName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName"></a>

```csharp
public string DnsZoneName { get; }
```

- *Type:* string

---

##### `ManagedType`<sup>Required</sup> <a name="ManagedType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType"></a>

```csharp
public string ManagedType { get; }
```

- *Type:* string

---

##### `CertificateSecretIdInput`<sup>Optional</sup> <a name="CertificateSecretIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput"></a>

```csharp
public string CertificateSecretIdInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IntegrationIntegrationInstanceAttachmentsList <a name="IntegrationIntegrationInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.get"></a>

```csharp
private IntegrationIntegrationInstanceAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IntegrationIntegrationInstanceAttachmentsOutputReference <a name="IntegrationIntegrationInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit">IsImplicit</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl">TargetInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole">TargetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType">TargetServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments">IntegrationIntegrationInstanceAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsImplicit`<sup>Required</sup> <a name="IsImplicit" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit"></a>

```csharp
public IResolvable IsImplicit { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TargetInstanceUrl`<sup>Required</sup> <a name="TargetInstanceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```csharp
public string TargetInstanceUrl { get; }
```

- *Type:* string

---

##### `TargetRole`<sup>Required</sup> <a name="TargetRole" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole"></a>

```csharp
public string TargetRole { get; }
```

- *Type:* string

---

##### `TargetServiceType`<sup>Required</sup> <a name="TargetServiceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```csharp
public string TargetServiceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue"></a>

```csharp
public IntegrationIntegrationInstanceAttachments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments">IntegrationIntegrationInstanceAttachments</a>

---


### IntegrationIntegrationInstanceCustomEndpointOutputReference <a name="IntegrationIntegrationInstanceCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceCustomEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetCertificateSecretId">ResetCertificateSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetDnsType">ResetDnsType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateSecretId` <a name="ResetCertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetCertificateSecretId"></a>

```csharp
private void ResetCertificateSecretId()
```

##### `ResetDnsType` <a name="ResetDnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetDnsType"></a>

```csharp
private void ResetDnsType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType">ManagedType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretIdInput">CertificateSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsTypeInput">DnsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneNameInput">DnsZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType">DnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName">DnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```csharp
public double CertificateSecretVersion { get; }
```

- *Type:* double

---

##### `ManagedType`<sup>Required</sup> <a name="ManagedType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType"></a>

```csharp
public string ManagedType { get; }
```

- *Type:* string

---

##### `CertificateSecretIdInput`<sup>Optional</sup> <a name="CertificateSecretIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretIdInput"></a>

```csharp
public string CertificateSecretIdInput { get; }
```

- *Type:* string

---

##### `DnsTypeInput`<sup>Optional</sup> <a name="DnsTypeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsTypeInput"></a>

```csharp
public string DnsTypeInput { get; }
```

- *Type:* string

---

##### `DnsZoneNameInput`<sup>Optional</sup> <a name="DnsZoneNameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneNameInput"></a>

```csharp
public string DnsZoneNameInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; }
```

- *Type:* string

---

##### `DnsType`<sup>Required</sup> <a name="DnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType"></a>

```csharp
public string DnsType { get; }
```

- *Type:* string

---

##### `DnsZoneName`<sup>Required</sup> <a name="DnsZoneName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName"></a>

```csharp
public string DnsZoneName { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue"></a>

```csharp
public IntegrationIntegrationInstanceCustomEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get"></a>

```csharp
private IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged">TimeRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `TimeRoleChanged`<sup>Required</sup> <a name="TimeRoleChanged" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged"></a>

```csharp
public string TimeRoleChanged { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue"></a>

```csharp
public IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a>

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsList <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceDisasterRecoveryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.get"></a>

```csharp
private IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails">CrossRegionIntegrationInstanceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl">RegionalInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails">IntegrationIntegrationInstanceDisasterRecoveryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossRegionIntegrationInstanceDetails`<sup>Required</sup> <a name="CrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails"></a>

```csharp
public IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList CrossRegionIntegrationInstanceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a>

---

##### `RegionalInstanceUrl`<sup>Required</sup> <a name="RegionalInstanceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl"></a>

```csharp
public string RegionalInstanceUrl { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue"></a>

```csharp
public IntegrationIntegrationInstanceDisasterRecoveryDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails">IntegrationIntegrationInstanceDisasterRecoveryDetails</a>

---


### IntegrationIntegrationInstanceIdcsInfoList <a name="IntegrationIntegrationInstanceIdcsInfoList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceIdcsInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.get"></a>

```csharp
private IntegrationIntegrationInstanceIdcsInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IntegrationIntegrationInstanceIdcsInfoOutputReference <a name="IntegrationIntegrationInstanceIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceIdcsInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName">IdcsAppDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId">IdcsAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl">IdcsAppLocationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName">IdcsAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">InstancePrimaryAudienceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo">IntegrationIntegrationInstanceIdcsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdcsAppDisplayName`<sup>Required</sup> <a name="IdcsAppDisplayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```csharp
public string IdcsAppDisplayName { get; }
```

- *Type:* string

---

##### `IdcsAppId`<sup>Required</sup> <a name="IdcsAppId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId"></a>

```csharp
public string IdcsAppId { get; }
```

- *Type:* string

---

##### `IdcsAppLocationUrl`<sup>Required</sup> <a name="IdcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```csharp
public string IdcsAppLocationUrl { get; }
```

- *Type:* string

---

##### `IdcsAppName`<sup>Required</sup> <a name="IdcsAppName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName"></a>

```csharp
public string IdcsAppName { get; }
```

- *Type:* string

---

##### `InstancePrimaryAudienceUrl`<sup>Required</sup> <a name="InstancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```csharp
public string InstancePrimaryAudienceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue"></a>

```csharp
public IntegrationIntegrationInstanceIdcsInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo">IntegrationIntegrationInstanceIdcsInfo</a>

---


### IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get"></a>

```csharp
private IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resetAllowlistedIps">ResetAllowlistedIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowlistedIps` <a name="ResetAllowlistedIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resetAllowlistedIps"></a>

```csharp
private void ResetAllowlistedIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIpsInput">AllowlistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps">AllowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowlistedIpsInput`<sup>Optional</sup> <a name="AllowlistedIpsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIpsInput"></a>

```csharp
public string[] AllowlistedIpsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AllowlistedIps`<sup>Required</sup> <a name="AllowlistedIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps"></a>

```csharp
public string[] AllowlistedIps { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.putAllowlistedHttpVcns">PutAllowlistedHttpVcns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpIps">ResetAllowlistedHttpIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpVcns">ResetAllowlistedHttpVcns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetIsIntegrationVcnAllowlisted">ResetIsIntegrationVcnAllowlisted</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowlistedHttpVcns` <a name="PutAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.putAllowlistedHttpVcns"></a>

```csharp
private void PutAllowlistedHttpVcns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.putAllowlistedHttpVcns.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowlistedHttpIps` <a name="ResetAllowlistedHttpIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpIps"></a>

```csharp
private void ResetAllowlistedHttpIps()
```

##### `ResetAllowlistedHttpVcns` <a name="ResetAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpVcns"></a>

```csharp
private void ResetAllowlistedHttpVcns()
```

##### `ResetIsIntegrationVcnAllowlisted` <a name="ResetIsIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetIsIntegrationVcnAllowlisted"></a>

```csharp
private void ResetIsIntegrationVcnAllowlisted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns">AllowlistedHttpVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIpsInput">AllowlistedHttpIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcnsInput">AllowlistedHttpVcnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlistedInput">IsIntegrationVcnAllowlistedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput">NetworkEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps">AllowlistedHttpIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted">IsIntegrationVcnAllowlisted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType">NetworkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowlistedHttpVcns`<sup>Required</sup> <a name="AllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns"></a>

```csharp
public IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList AllowlistedHttpVcns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a>

---

##### `AllowlistedHttpIpsInput`<sup>Optional</sup> <a name="AllowlistedHttpIpsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIpsInput"></a>

```csharp
public string[] AllowlistedHttpIpsInput { get; }
```

- *Type:* string[]

---

##### `AllowlistedHttpVcnsInput`<sup>Optional</sup> <a name="AllowlistedHttpVcnsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcnsInput"></a>

```csharp
public object AllowlistedHttpVcnsInput { get; }
```

- *Type:* object

---

##### `IsIntegrationVcnAllowlistedInput`<sup>Optional</sup> <a name="IsIntegrationVcnAllowlistedInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlistedInput"></a>

```csharp
public object IsIntegrationVcnAllowlistedInput { get; }
```

- *Type:* object

---

##### `NetworkEndpointTypeInput`<sup>Optional</sup> <a name="NetworkEndpointTypeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput"></a>

```csharp
public string NetworkEndpointTypeInput { get; }
```

- *Type:* string

---

##### `AllowlistedHttpIps`<sup>Required</sup> <a name="AllowlistedHttpIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps"></a>

```csharp
public string[] AllowlistedHttpIps { get; }
```

- *Type:* string[]

---

##### `IsIntegrationVcnAllowlisted`<sup>Required</sup> <a name="IsIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted"></a>

```csharp
public object IsIntegrationVcnAllowlisted { get; }
```

- *Type:* object

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```csharp
public string NetworkEndpointType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```csharp
public IntegrationIntegrationInstanceNetworkEndpointDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

---


### IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList <a name="IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get"></a>

```csharp
private IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference <a name="IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType">OutboundConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection">IntegrationIntegrationInstancePrivateEndpointOutboundConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `OutboundConnectionType`<sup>Required</sup> <a name="OutboundConnectionType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType"></a>

```csharp
public string OutboundConnectionType { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue"></a>

```csharp
public IntegrationIntegrationInstancePrivateEndpointOutboundConnection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection">IntegrationIntegrationInstancePrivateEndpointOutboundConnection</a>

---


### IntegrationIntegrationInstanceTimeoutsOutputReference <a name="IntegrationIntegrationInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationIntegrationInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



