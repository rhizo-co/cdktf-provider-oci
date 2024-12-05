# `jmsFleetAdvancedFeatureConfiguration` Submodule <a name="`jmsFleetAdvancedFeatureConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsFleetAdvancedFeatureConfiguration <a name="JmsFleetAdvancedFeatureConfiguration" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration oci_jms_fleet_advanced_feature_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfiguration(Construct Scope, string Id, JmsFleetAdvancedFeatureConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig">JmsFleetAdvancedFeatureConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig">JmsFleetAdvancedFeatureConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putAdvancedUsageTracking">PutAdvancedUsageTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putCryptoEventAnalysis">PutCryptoEventAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJavaMigrationAnalysis">PutJavaMigrationAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJfrRecording">PutJfrRecording</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putLcm">PutLcm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putPerformanceTuningAnalysis">PutPerformanceTuningAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAdvancedUsageTracking">ResetAdvancedUsageTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAnalyticBucketName">ResetAnalyticBucketName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAnalyticNamespace">ResetAnalyticNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetCryptoEventAnalysis">ResetCryptoEventAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetJavaMigrationAnalysis">ResetJavaMigrationAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetJfrRecording">ResetJfrRecording</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetLcm">ResetLcm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetPerformanceTuningAnalysis">ResetPerformanceTuningAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedUsageTracking` <a name="PutAdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putAdvancedUsageTracking"></a>

```csharp
private void PutAdvancedUsageTracking(JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putAdvancedUsageTracking.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a>

---

##### `PutCryptoEventAnalysis` <a name="PutCryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putCryptoEventAnalysis"></a>

```csharp
private void PutCryptoEventAnalysis(JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putCryptoEventAnalysis.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a>

---

##### `PutJavaMigrationAnalysis` <a name="PutJavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJavaMigrationAnalysis"></a>

```csharp
private void PutJavaMigrationAnalysis(JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJavaMigrationAnalysis.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a>

---

##### `PutJfrRecording` <a name="PutJfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJfrRecording"></a>

```csharp
private void PutJfrRecording(JmsFleetAdvancedFeatureConfigurationJfrRecording Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putJfrRecording.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a>

---

##### `PutLcm` <a name="PutLcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putLcm"></a>

```csharp
private void PutLcm(JmsFleetAdvancedFeatureConfigurationLcm Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putLcm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a>

---

##### `PutPerformanceTuningAnalysis` <a name="PutPerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putPerformanceTuningAnalysis"></a>

```csharp
private void PutPerformanceTuningAnalysis(JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putPerformanceTuningAnalysis.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(JmsFleetAdvancedFeatureConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a>

---

##### `ResetAdvancedUsageTracking` <a name="ResetAdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAdvancedUsageTracking"></a>

```csharp
private void ResetAdvancedUsageTracking()
```

##### `ResetAnalyticBucketName` <a name="ResetAnalyticBucketName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAnalyticBucketName"></a>

```csharp
private void ResetAnalyticBucketName()
```

##### `ResetAnalyticNamespace` <a name="ResetAnalyticNamespace" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetAnalyticNamespace"></a>

```csharp
private void ResetAnalyticNamespace()
```

##### `ResetCryptoEventAnalysis` <a name="ResetCryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetCryptoEventAnalysis"></a>

```csharp
private void ResetCryptoEventAnalysis()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJavaMigrationAnalysis` <a name="ResetJavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetJavaMigrationAnalysis"></a>

```csharp
private void ResetJavaMigrationAnalysis()
```

##### `ResetJfrRecording` <a name="ResetJfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetJfrRecording"></a>

```csharp
private void ResetJfrRecording()
```

##### `ResetLcm` <a name="ResetLcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetLcm"></a>

```csharp
private void ResetLcm()
```

##### `ResetPerformanceTuningAnalysis` <a name="ResetPerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetPerformanceTuningAnalysis"></a>

```csharp
private void ResetPerformanceTuningAnalysis()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a JmsFleetAdvancedFeatureConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsFleetAdvancedFeatureConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsFleetAdvancedFeatureConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsFleetAdvancedFeatureConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsFleetAdvancedFeatureConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a JmsFleetAdvancedFeatureConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JmsFleetAdvancedFeatureConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JmsFleetAdvancedFeatureConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the JmsFleetAdvancedFeatureConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.advancedUsageTracking">AdvancedUsageTracking</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysis">CryptoEventAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysis">JavaMigrationAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.jfrRecording">JfrRecording</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference">JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lcm">Lcm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference">JmsFleetAdvancedFeatureConfigurationLcmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysis">PerformanceTuningAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeLastModified">TimeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference">JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.advancedUsageTrackingInput">AdvancedUsageTrackingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticBucketNameInput">AnalyticBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticNamespaceInput">AnalyticNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysisInput">CryptoEventAnalysisInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fleetIdInput">FleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysisInput">JavaMigrationAnalysisInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.jfrRecordingInput">JfrRecordingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lcmInput">LcmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysisInput">PerformanceTuningAnalysisInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticBucketName">AnalyticBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticNamespace">AnalyticNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedUsageTracking`<sup>Required</sup> <a name="AdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.advancedUsageTracking"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference AdvancedUsageTracking { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference</a>

---

##### `CryptoEventAnalysis`<sup>Required</sup> <a name="CryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysis"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference CryptoEventAnalysis { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference</a>

---

##### `JavaMigrationAnalysis`<sup>Required</sup> <a name="JavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysis"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference JavaMigrationAnalysis { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference</a>

---

##### `JfrRecording`<sup>Required</sup> <a name="JfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.jfrRecording"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference JfrRecording { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference">JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference</a>

---

##### `Lcm`<sup>Required</sup> <a name="Lcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lcm"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmOutputReference Lcm { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference">JmsFleetAdvancedFeatureConfigurationLcmOutputReference</a>

---

##### `PerformanceTuningAnalysis`<sup>Required</sup> <a name="PerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysis"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference PerformanceTuningAnalysis { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference</a>

---

##### `TimeLastModified`<sup>Required</sup> <a name="TimeLastModified" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeLastModified"></a>

```csharp
public string TimeLastModified { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeouts"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference">JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference</a>

---

##### `AdvancedUsageTrackingInput`<sup>Optional</sup> <a name="AdvancedUsageTrackingInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.advancedUsageTrackingInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking AdvancedUsageTrackingInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a>

---

##### `AnalyticBucketNameInput`<sup>Optional</sup> <a name="AnalyticBucketNameInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticBucketNameInput"></a>

```csharp
public string AnalyticBucketNameInput { get; }
```

- *Type:* string

---

##### `AnalyticNamespaceInput`<sup>Optional</sup> <a name="AnalyticNamespaceInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticNamespaceInput"></a>

```csharp
public string AnalyticNamespaceInput { get; }
```

- *Type:* string

---

##### `CryptoEventAnalysisInput`<sup>Optional</sup> <a name="CryptoEventAnalysisInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysisInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis CryptoEventAnalysisInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a>

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fleetIdInput"></a>

```csharp
public string FleetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JavaMigrationAnalysisInput`<sup>Optional</sup> <a name="JavaMigrationAnalysisInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysisInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis JavaMigrationAnalysisInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a>

---

##### `JfrRecordingInput`<sup>Optional</sup> <a name="JfrRecordingInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.jfrRecordingInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationJfrRecording JfrRecordingInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a>

---

##### `LcmInput`<sup>Optional</sup> <a name="LcmInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.lcmInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcm LcmInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a>

---

##### `PerformanceTuningAnalysisInput`<sup>Optional</sup> <a name="PerformanceTuningAnalysisInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysisInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis PerformanceTuningAnalysisInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AnalyticBucketName`<sup>Required</sup> <a name="AnalyticBucketName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticBucketName"></a>

```csharp
public string AnalyticBucketName { get; }
```

- *Type:* string

---

##### `AnalyticNamespace`<sup>Required</sup> <a name="AnalyticNamespace" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.analyticNamespace"></a>

```csharp
public string AnalyticNamespace { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking <a name="JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking {
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

### JmsFleetAdvancedFeatureConfigurationConfig <a name="JmsFleetAdvancedFeatureConfigurationConfig" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FleetId,
    JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking AdvancedUsageTracking = null,
    string AnalyticBucketName = null,
    string AnalyticNamespace = null,
    JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis CryptoEventAnalysis = null,
    string Id = null,
    JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis JavaMigrationAnalysis = null,
    JmsFleetAdvancedFeatureConfigurationJfrRecording JfrRecording = null,
    JmsFleetAdvancedFeatureConfigurationLcm Lcm = null,
    JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis PerformanceTuningAnalysis = null,
    JmsFleetAdvancedFeatureConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.fleetId">FleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#fleet_id JmsFleetAdvancedFeatureConfiguration#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.advancedUsageTracking">AdvancedUsageTracking</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a></code> | advanced_usage_tracking block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.analyticBucketName">AnalyticBucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_bucket_name JmsFleetAdvancedFeatureConfiguration#analytic_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.analyticNamespace">AnalyticNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_namespace JmsFleetAdvancedFeatureConfiguration#analytic_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.cryptoEventAnalysis">CryptoEventAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a></code> | crypto_event_analysis block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#id JmsFleetAdvancedFeatureConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.javaMigrationAnalysis">JavaMigrationAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a></code> | java_migration_analysis block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.jfrRecording">JfrRecording</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a></code> | jfr_recording block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.lcm">Lcm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a></code> | lcm block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.performanceTuningAnalysis">PerformanceTuningAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a></code> | performance_tuning_analysis block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.fleetId"></a>

```csharp
public string FleetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#fleet_id JmsFleetAdvancedFeatureConfiguration#fleet_id}.

---

##### `AdvancedUsageTracking`<sup>Optional</sup> <a name="AdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.advancedUsageTracking"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking AdvancedUsageTracking { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a>

advanced_usage_tracking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#advanced_usage_tracking JmsFleetAdvancedFeatureConfiguration#advanced_usage_tracking}

---

##### `AnalyticBucketName`<sup>Optional</sup> <a name="AnalyticBucketName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.analyticBucketName"></a>

```csharp
public string AnalyticBucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_bucket_name JmsFleetAdvancedFeatureConfiguration#analytic_bucket_name}.

---

##### `AnalyticNamespace`<sup>Optional</sup> <a name="AnalyticNamespace" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.analyticNamespace"></a>

```csharp
public string AnalyticNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#analytic_namespace JmsFleetAdvancedFeatureConfiguration#analytic_namespace}.

---

##### `CryptoEventAnalysis`<sup>Optional</sup> <a name="CryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.cryptoEventAnalysis"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis CryptoEventAnalysis { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a>

crypto_event_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#crypto_event_analysis JmsFleetAdvancedFeatureConfiguration#crypto_event_analysis}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#id JmsFleetAdvancedFeatureConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JavaMigrationAnalysis`<sup>Optional</sup> <a name="JavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.javaMigrationAnalysis"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis JavaMigrationAnalysis { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a>

java_migration_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#java_migration_analysis JmsFleetAdvancedFeatureConfiguration#java_migration_analysis}

---

##### `JfrRecording`<sup>Optional</sup> <a name="JfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.jfrRecording"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationJfrRecording JfrRecording { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a>

jfr_recording block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#jfr_recording JmsFleetAdvancedFeatureConfiguration#jfr_recording}

---

##### `Lcm`<sup>Optional</sup> <a name="Lcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.lcm"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcm Lcm { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a>

lcm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#lcm JmsFleetAdvancedFeatureConfiguration#lcm}

---

##### `PerformanceTuningAnalysis`<sup>Optional</sup> <a name="PerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.performanceTuningAnalysis"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis PerformanceTuningAnalysis { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a>

performance_tuning_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#performance_tuning_analysis JmsFleetAdvancedFeatureConfiguration#performance_tuning_analysis}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationConfig.property.timeouts"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts">JmsFleetAdvancedFeatureConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#timeouts JmsFleetAdvancedFeatureConfiguration#timeouts}

---

### JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis <a name="JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis {
    object IsEnabled = null,
    JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog SummarizedEventsLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.property.summarizedEventsLog">SummarizedEventsLog</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a></code> | summarized_events_log block. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

##### `SummarizedEventsLog`<sup>Optional</sup> <a name="SummarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.property.summarizedEventsLog"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog SummarizedEventsLog { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a>

summarized_events_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#summarized_events_log JmsFleetAdvancedFeatureConfiguration#summarized_events_log}

---

### JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog <a name="JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog {
    string LogGroupId,
    string LogId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#log_group_id JmsFleetAdvancedFeatureConfiguration#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.property.logId">LogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#log_id JmsFleetAdvancedFeatureConfiguration#log_id}. |

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#log_group_id JmsFleetAdvancedFeatureConfiguration#log_group_id}.

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.property.logId"></a>

```csharp
public string LogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#log_id JmsFleetAdvancedFeatureConfiguration#log_id}.

---

### JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis <a name="JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis {
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

### JmsFleetAdvancedFeatureConfigurationJfrRecording <a name="JmsFleetAdvancedFeatureConfigurationJfrRecording" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationJfrRecording {
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

### JmsFleetAdvancedFeatureConfigurationLcm <a name="JmsFleetAdvancedFeatureConfigurationLcm" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcm {
    object IsEnabled = null,
    JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions PostInstallationActions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.property.postInstallationActions">PostInstallationActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a></code> | post_installation_actions block. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

##### `PostInstallationActions`<sup>Optional</sup> <a name="PostInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm.property.postInstallationActions"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions PostInstallationActions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a>

post_installation_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#post_installation_actions JmsFleetAdvancedFeatureConfiguration#post_installation_actions}

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions {
    object AddLoggingHandler = null,
    string[] DisabledTlsVersions = null,
    string GlobalLoggingLevel = null,
    JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings MinimumKeySizeSettings = null,
    JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies Proxies = null,
    object ShouldReplaceCertificatesOperatingSystem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.addLoggingHandler">AddLoggingHandler</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#add_logging_handler JmsFleetAdvancedFeatureConfiguration#add_logging_handler}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.disabledTlsVersions">DisabledTlsVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#disabled_tls_versions JmsFleetAdvancedFeatureConfiguration#disabled_tls_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.globalLoggingLevel">GlobalLoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#global_logging_level JmsFleetAdvancedFeatureConfiguration#global_logging_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.minimumKeySizeSettings">MinimumKeySizeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a></code> | minimum_key_size_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.proxies">Proxies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a></code> | proxies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.shouldReplaceCertificatesOperatingSystem">ShouldReplaceCertificatesOperatingSystem</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#should_replace_certificates_operating_system JmsFleetAdvancedFeatureConfiguration#should_replace_certificates_operating_system}. |

---

##### `AddLoggingHandler`<sup>Optional</sup> <a name="AddLoggingHandler" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.addLoggingHandler"></a>

```csharp
public object AddLoggingHandler { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#add_logging_handler JmsFleetAdvancedFeatureConfiguration#add_logging_handler}.

---

##### `DisabledTlsVersions`<sup>Optional</sup> <a name="DisabledTlsVersions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.disabledTlsVersions"></a>

```csharp
public string[] DisabledTlsVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#disabled_tls_versions JmsFleetAdvancedFeatureConfiguration#disabled_tls_versions}.

---

##### `GlobalLoggingLevel`<sup>Optional</sup> <a name="GlobalLoggingLevel" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.globalLoggingLevel"></a>

```csharp
public string GlobalLoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#global_logging_level JmsFleetAdvancedFeatureConfiguration#global_logging_level}.

---

##### `MinimumKeySizeSettings`<sup>Optional</sup> <a name="MinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.minimumKeySizeSettings"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings MinimumKeySizeSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a>

minimum_key_size_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#minimum_key_size_settings JmsFleetAdvancedFeatureConfiguration#minimum_key_size_settings}

---

##### `Proxies`<sup>Optional</sup> <a name="Proxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.proxies"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies Proxies { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a>

proxies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#proxies JmsFleetAdvancedFeatureConfiguration#proxies}

---

##### `ShouldReplaceCertificatesOperatingSystem`<sup>Optional</sup> <a name="ShouldReplaceCertificatesOperatingSystem" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.property.shouldReplaceCertificatesOperatingSystem"></a>

```csharp
public object ShouldReplaceCertificatesOperatingSystem { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#should_replace_certificates_operating_system JmsFleetAdvancedFeatureConfiguration#should_replace_certificates_operating_system}.

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings {
    object Certpath = null,
    object Jar = null,
    object Tls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.certpath">Certpath</a></code> | <code>object</code> | certpath block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.jar">Jar</a></code> | <code>object</code> | jar block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.tls">Tls</a></code> | <code>object</code> | tls block. |

---

##### `Certpath`<sup>Optional</sup> <a name="Certpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.certpath"></a>

```csharp
public object Certpath { get; set; }
```

- *Type:* object

certpath block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#certpath JmsFleetAdvancedFeatureConfiguration#certpath}

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.jar"></a>

```csharp
public object Jar { get; set; }
```

- *Type:* object

jar block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#jar JmsFleetAdvancedFeatureConfiguration#jar}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#tls JmsFleetAdvancedFeatureConfiguration#tls}

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath {
    double KeySize = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.property.keySize">KeySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}. |

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.property.keySize"></a>

```csharp
public double KeySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}.

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar {
    double KeySize = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.property.keySize">KeySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}. |

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.property.keySize"></a>

```csharp
public double KeySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}.

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls {
    double KeySize = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.property.keySize">KeySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}. |

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.property.keySize"></a>

```csharp
public double KeySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#key_size JmsFleetAdvancedFeatureConfiguration#key_size}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#name JmsFleetAdvancedFeatureConfiguration#name}.

---

### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies {
    string FtpProxyHost = null,
    double FtpProxyPort = null,
    string HttpProxyHost = null,
    double HttpProxyPort = null,
    string HttpsProxyHost = null,
    double HttpsProxyPort = null,
    string SocksProxyHost = null,
    double SocksProxyPort = null,
    object UseSystemProxies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.ftpProxyHost">FtpProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_host JmsFleetAdvancedFeatureConfiguration#ftp_proxy_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.ftpProxyPort">FtpProxyPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_port JmsFleetAdvancedFeatureConfiguration#ftp_proxy_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpProxyHost">HttpProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_host JmsFleetAdvancedFeatureConfiguration#http_proxy_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpProxyPort">HttpProxyPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_port JmsFleetAdvancedFeatureConfiguration#http_proxy_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpsProxyHost">HttpsProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_host JmsFleetAdvancedFeatureConfiguration#https_proxy_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpsProxyPort">HttpsProxyPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_port JmsFleetAdvancedFeatureConfiguration#https_proxy_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.socksProxyHost">SocksProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_host JmsFleetAdvancedFeatureConfiguration#socks_proxy_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.socksProxyPort">SocksProxyPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_port JmsFleetAdvancedFeatureConfiguration#socks_proxy_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.useSystemProxies">UseSystemProxies</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#use_system_proxies JmsFleetAdvancedFeatureConfiguration#use_system_proxies}. |

---

##### `FtpProxyHost`<sup>Optional</sup> <a name="FtpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.ftpProxyHost"></a>

```csharp
public string FtpProxyHost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_host JmsFleetAdvancedFeatureConfiguration#ftp_proxy_host}.

---

##### `FtpProxyPort`<sup>Optional</sup> <a name="FtpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.ftpProxyPort"></a>

```csharp
public double FtpProxyPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#ftp_proxy_port JmsFleetAdvancedFeatureConfiguration#ftp_proxy_port}.

---

##### `HttpProxyHost`<sup>Optional</sup> <a name="HttpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpProxyHost"></a>

```csharp
public string HttpProxyHost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_host JmsFleetAdvancedFeatureConfiguration#http_proxy_host}.

---

##### `HttpProxyPort`<sup>Optional</sup> <a name="HttpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpProxyPort"></a>

```csharp
public double HttpProxyPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#http_proxy_port JmsFleetAdvancedFeatureConfiguration#http_proxy_port}.

---

##### `HttpsProxyHost`<sup>Optional</sup> <a name="HttpsProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpsProxyHost"></a>

```csharp
public string HttpsProxyHost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_host JmsFleetAdvancedFeatureConfiguration#https_proxy_host}.

---

##### `HttpsProxyPort`<sup>Optional</sup> <a name="HttpsProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.httpsProxyPort"></a>

```csharp
public double HttpsProxyPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#https_proxy_port JmsFleetAdvancedFeatureConfiguration#https_proxy_port}.

---

##### `SocksProxyHost`<sup>Optional</sup> <a name="SocksProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.socksProxyHost"></a>

```csharp
public string SocksProxyHost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_host JmsFleetAdvancedFeatureConfiguration#socks_proxy_host}.

---

##### `SocksProxyPort`<sup>Optional</sup> <a name="SocksProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.socksProxyPort"></a>

```csharp
public double SocksProxyPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#socks_proxy_port JmsFleetAdvancedFeatureConfiguration#socks_proxy_port}.

---

##### `UseSystemProxies`<sup>Optional</sup> <a name="UseSystemProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.property.useSystemProxies"></a>

```csharp
public object UseSystemProxies { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#use_system_proxies JmsFleetAdvancedFeatureConfiguration#use_system_proxies}.

---

### JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis <a name="JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis {
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#is_enabled JmsFleetAdvancedFeatureConfiguration#is_enabled}.

---

### JmsFleetAdvancedFeatureConfigurationTimeouts <a name="JmsFleetAdvancedFeatureConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#create JmsFleetAdvancedFeatureConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#delete JmsFleetAdvancedFeatureConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#update JmsFleetAdvancedFeatureConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#create JmsFleetAdvancedFeatureConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#delete JmsFleetAdvancedFeatureConfiguration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_fleet_advanced_feature_configuration#update JmsFleetAdvancedFeatureConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference <a name="JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">JmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a>

---


### JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference <a name="JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.putSummarizedEventsLog">PutSummarizedEventsLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resetSummarizedEventsLog">ResetSummarizedEventsLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummarizedEventsLog` <a name="PutSummarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.putSummarizedEventsLog"></a>

```csharp
private void PutSummarizedEventsLog(JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.putSummarizedEventsLog.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a>

---

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetSummarizedEventsLog` <a name="ResetSummarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resetSummarizedEventsLog"></a>

```csharp
private void ResetSummarizedEventsLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLog">SummarizedEventsLog</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLogInput">SummarizedEventsLogInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SummarizedEventsLog`<sup>Required</sup> <a name="SummarizedEventsLog" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLog"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference SummarizedEventsLog { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference</a>

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `SummarizedEventsLogInput`<sup>Optional</sup> <a name="SummarizedEventsLogInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLogInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog SummarizedEventsLogInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a>

---


### JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference <a name="JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logIdInput">LogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logIdInput"></a>

```csharp
public string LogIdInput { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">JmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a>

---


### JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference <a name="JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">JmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a>

---


### JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference <a name="JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationJfrRecording InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationJfrRecording">JmsFleetAdvancedFeatureConfigurationJfrRecording</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.putPostInstallationActions">PutPostInstallationActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resetPostInstallationActions">ResetPostInstallationActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostInstallationActions` <a name="PutPostInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.putPostInstallationActions"></a>

```csharp
private void PutPostInstallationActions(JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.putPostInstallationActions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a>

---

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetPostInstallationActions` <a name="ResetPostInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.resetPostInstallationActions"></a>

```csharp
private void ResetPostInstallationActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActions">PostInstallationActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActionsInput">PostInstallationActionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostInstallationActions`<sup>Required</sup> <a name="PostInstallationActions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActions"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference PostInstallationActions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference</a>

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `PostInstallationActionsInput`<sup>Optional</sup> <a name="PostInstallationActionsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActionsInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions PostInstallationActionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcm InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcm">JmsFleetAdvancedFeatureConfigurationLcm</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.get"></a>

```csharp
private JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeySize` <a name="ResetKeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resetKeySize"></a>

```csharp
private void ResetKeySize()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySizeInput">KeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySizeInput"></a>

```csharp
public double KeySizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.get"></a>

```csharp
private JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeySize` <a name="ResetKeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resetKeySize"></a>

```csharp
private void ResetKeySize()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySizeInput">KeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySizeInput"></a>

```csharp
public double KeySizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putCertpath">PutCertpath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putJar">PutJar</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetCertpath">ResetCertpath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertpath` <a name="PutCertpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putCertpath"></a>

```csharp
private void PutCertpath(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putCertpath.parameter.value"></a>

- *Type:* object

---

##### `PutJar` <a name="PutJar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putJar"></a>

```csharp
private void PutJar(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putJar.parameter.value"></a>

- *Type:* object

---

##### `PutTls` <a name="PutTls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putTls"></a>

```csharp
private void PutTls(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.putTls.parameter.value"></a>

- *Type:* object

---

##### `ResetCertpath` <a name="ResetCertpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetCertpath"></a>

```csharp
private void ResetCertpath()
```

##### `ResetJar` <a name="ResetJar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetJar"></a>

```csharp
private void ResetJar()
```

##### `ResetTls` <a name="ResetTls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpath">Certpath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jar">Jar</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tls">Tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpathInput">CertpathInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jarInput">JarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certpath`<sup>Required</sup> <a name="Certpath" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpath"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList Certpath { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList</a>

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jar"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList Jar { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tls"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList Tls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList</a>

---

##### `CertpathInput`<sup>Optional</sup> <a name="CertpathInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpathInput"></a>

```csharp
public object CertpathInput { get; }
```

- *Type:* object

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jarInput"></a>

```csharp
public object JarInput { get; }
```

- *Type:* object

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.get"></a>

```csharp
private JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeySize` <a name="ResetKeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resetKeySize"></a>

```csharp
private void ResetKeySize()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySizeInput">KeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySizeInput"></a>

```csharp
public double KeySizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putMinimumKeySizeSettings">PutMinimumKeySizeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putProxies">PutProxies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetAddLoggingHandler">ResetAddLoggingHandler</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetDisabledTlsVersions">ResetDisabledTlsVersions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetGlobalLoggingLevel">ResetGlobalLoggingLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetMinimumKeySizeSettings">ResetMinimumKeySizeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetProxies">ResetProxies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetShouldReplaceCertificatesOperatingSystem">ResetShouldReplaceCertificatesOperatingSystem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMinimumKeySizeSettings` <a name="PutMinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putMinimumKeySizeSettings"></a>

```csharp
private void PutMinimumKeySizeSettings(JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putMinimumKeySizeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a>

---

##### `PutProxies` <a name="PutProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putProxies"></a>

```csharp
private void PutProxies(JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.putProxies.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a>

---

##### `ResetAddLoggingHandler` <a name="ResetAddLoggingHandler" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetAddLoggingHandler"></a>

```csharp
private void ResetAddLoggingHandler()
```

##### `ResetDisabledTlsVersions` <a name="ResetDisabledTlsVersions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetDisabledTlsVersions"></a>

```csharp
private void ResetDisabledTlsVersions()
```

##### `ResetGlobalLoggingLevel` <a name="ResetGlobalLoggingLevel" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetGlobalLoggingLevel"></a>

```csharp
private void ResetGlobalLoggingLevel()
```

##### `ResetMinimumKeySizeSettings` <a name="ResetMinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetMinimumKeySizeSettings"></a>

```csharp
private void ResetMinimumKeySizeSettings()
```

##### `ResetProxies` <a name="ResetProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetProxies"></a>

```csharp
private void ResetProxies()
```

##### `ResetShouldReplaceCertificatesOperatingSystem` <a name="ResetShouldReplaceCertificatesOperatingSystem" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resetShouldReplaceCertificatesOperatingSystem"></a>

```csharp
private void ResetShouldReplaceCertificatesOperatingSystem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettings">MinimumKeySizeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxies">Proxies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandlerInput">AddLoggingHandlerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersionsInput">DisabledTlsVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevelInput">GlobalLoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettingsInput">MinimumKeySizeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxiesInput">ProxiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystemInput">ShouldReplaceCertificatesOperatingSystemInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandler">AddLoggingHandler</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersions">DisabledTlsVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevel">GlobalLoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystem">ShouldReplaceCertificatesOperatingSystem</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumKeySizeSettings`<sup>Required</sup> <a name="MinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettings"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference MinimumKeySizeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference</a>

---

##### `Proxies`<sup>Required</sup> <a name="Proxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxies"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference Proxies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference</a>

---

##### `AddLoggingHandlerInput`<sup>Optional</sup> <a name="AddLoggingHandlerInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandlerInput"></a>

```csharp
public object AddLoggingHandlerInput { get; }
```

- *Type:* object

---

##### `DisabledTlsVersionsInput`<sup>Optional</sup> <a name="DisabledTlsVersionsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersionsInput"></a>

```csharp
public string[] DisabledTlsVersionsInput { get; }
```

- *Type:* string[]

---

##### `GlobalLoggingLevelInput`<sup>Optional</sup> <a name="GlobalLoggingLevelInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevelInput"></a>

```csharp
public string GlobalLoggingLevelInput { get; }
```

- *Type:* string

---

##### `MinimumKeySizeSettingsInput`<sup>Optional</sup> <a name="MinimumKeySizeSettingsInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettingsInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings MinimumKeySizeSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a>

---

##### `ProxiesInput`<sup>Optional</sup> <a name="ProxiesInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxiesInput"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies ProxiesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a>

---

##### `ShouldReplaceCertificatesOperatingSystemInput`<sup>Optional</sup> <a name="ShouldReplaceCertificatesOperatingSystemInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystemInput"></a>

```csharp
public object ShouldReplaceCertificatesOperatingSystemInput { get; }
```

- *Type:* object

---

##### `AddLoggingHandler`<sup>Required</sup> <a name="AddLoggingHandler" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandler"></a>

```csharp
public object AddLoggingHandler { get; }
```

- *Type:* object

---

##### `DisabledTlsVersions`<sup>Required</sup> <a name="DisabledTlsVersions" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersions"></a>

```csharp
public string[] DisabledTlsVersions { get; }
```

- *Type:* string[]

---

##### `GlobalLoggingLevel`<sup>Required</sup> <a name="GlobalLoggingLevel" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevel"></a>

```csharp
public string GlobalLoggingLevel { get; }
```

- *Type:* string

---

##### `ShouldReplaceCertificatesOperatingSystem`<sup>Required</sup> <a name="ShouldReplaceCertificatesOperatingSystem" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystem"></a>

```csharp
public object ShouldReplaceCertificatesOperatingSystem { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a>

---


### JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference <a name="JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetFtpProxyHost">ResetFtpProxyHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetFtpProxyPort">ResetFtpProxyPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpProxyHost">ResetHttpProxyHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpProxyPort">ResetHttpProxyPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpsProxyHost">ResetHttpsProxyHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpsProxyPort">ResetHttpsProxyPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetSocksProxyHost">ResetSocksProxyHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetSocksProxyPort">ResetSocksProxyPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetUseSystemProxies">ResetUseSystemProxies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFtpProxyHost` <a name="ResetFtpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetFtpProxyHost"></a>

```csharp
private void ResetFtpProxyHost()
```

##### `ResetFtpProxyPort` <a name="ResetFtpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetFtpProxyPort"></a>

```csharp
private void ResetFtpProxyPort()
```

##### `ResetHttpProxyHost` <a name="ResetHttpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpProxyHost"></a>

```csharp
private void ResetHttpProxyHost()
```

##### `ResetHttpProxyPort` <a name="ResetHttpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpProxyPort"></a>

```csharp
private void ResetHttpProxyPort()
```

##### `ResetHttpsProxyHost` <a name="ResetHttpsProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpsProxyHost"></a>

```csharp
private void ResetHttpsProxyHost()
```

##### `ResetHttpsProxyPort` <a name="ResetHttpsProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetHttpsProxyPort"></a>

```csharp
private void ResetHttpsProxyPort()
```

##### `ResetSocksProxyHost` <a name="ResetSocksProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetSocksProxyHost"></a>

```csharp
private void ResetSocksProxyHost()
```

##### `ResetSocksProxyPort` <a name="ResetSocksProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetSocksProxyPort"></a>

```csharp
private void ResetSocksProxyPort()
```

##### `ResetUseSystemProxies` <a name="ResetUseSystemProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resetUseSystemProxies"></a>

```csharp
private void ResetUseSystemProxies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHostInput">FtpProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPortInput">FtpProxyPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHostInput">HttpProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPortInput">HttpProxyPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHostInput">HttpsProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPortInput">HttpsProxyPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHostInput">SocksProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPortInput">SocksProxyPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxiesInput">UseSystemProxiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHost">FtpProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPort">FtpProxyPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHost">HttpProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPort">HttpProxyPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHost">HttpsProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPort">HttpsProxyPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHost">SocksProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPort">SocksProxyPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxies">UseSystemProxies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FtpProxyHostInput`<sup>Optional</sup> <a name="FtpProxyHostInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHostInput"></a>

```csharp
public string FtpProxyHostInput { get; }
```

- *Type:* string

---

##### `FtpProxyPortInput`<sup>Optional</sup> <a name="FtpProxyPortInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPortInput"></a>

```csharp
public double FtpProxyPortInput { get; }
```

- *Type:* double

---

##### `HttpProxyHostInput`<sup>Optional</sup> <a name="HttpProxyHostInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHostInput"></a>

```csharp
public string HttpProxyHostInput { get; }
```

- *Type:* string

---

##### `HttpProxyPortInput`<sup>Optional</sup> <a name="HttpProxyPortInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPortInput"></a>

```csharp
public double HttpProxyPortInput { get; }
```

- *Type:* double

---

##### `HttpsProxyHostInput`<sup>Optional</sup> <a name="HttpsProxyHostInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHostInput"></a>

```csharp
public string HttpsProxyHostInput { get; }
```

- *Type:* string

---

##### `HttpsProxyPortInput`<sup>Optional</sup> <a name="HttpsProxyPortInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPortInput"></a>

```csharp
public double HttpsProxyPortInput { get; }
```

- *Type:* double

---

##### `SocksProxyHostInput`<sup>Optional</sup> <a name="SocksProxyHostInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHostInput"></a>

```csharp
public string SocksProxyHostInput { get; }
```

- *Type:* string

---

##### `SocksProxyPortInput`<sup>Optional</sup> <a name="SocksProxyPortInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPortInput"></a>

```csharp
public double SocksProxyPortInput { get; }
```

- *Type:* double

---

##### `UseSystemProxiesInput`<sup>Optional</sup> <a name="UseSystemProxiesInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxiesInput"></a>

```csharp
public object UseSystemProxiesInput { get; }
```

- *Type:* object

---

##### `FtpProxyHost`<sup>Required</sup> <a name="FtpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHost"></a>

```csharp
public string FtpProxyHost { get; }
```

- *Type:* string

---

##### `FtpProxyPort`<sup>Required</sup> <a name="FtpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPort"></a>

```csharp
public double FtpProxyPort { get; }
```

- *Type:* double

---

##### `HttpProxyHost`<sup>Required</sup> <a name="HttpProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHost"></a>

```csharp
public string HttpProxyHost { get; }
```

- *Type:* string

---

##### `HttpProxyPort`<sup>Required</sup> <a name="HttpProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPort"></a>

```csharp
public double HttpProxyPort { get; }
```

- *Type:* double

---

##### `HttpsProxyHost`<sup>Required</sup> <a name="HttpsProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHost"></a>

```csharp
public string HttpsProxyHost { get; }
```

- *Type:* string

---

##### `HttpsProxyPort`<sup>Required</sup> <a name="HttpsProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPort"></a>

```csharp
public double HttpsProxyPort { get; }
```

- *Type:* double

---

##### `SocksProxyHost`<sup>Required</sup> <a name="SocksProxyHost" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHost"></a>

```csharp
public string SocksProxyHost { get; }
```

- *Type:* string

---

##### `SocksProxyPort`<sup>Required</sup> <a name="SocksProxyPort" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPort"></a>

```csharp
public double SocksProxyPort { get; }
```

- *Type:* double

---

##### `UseSystemProxies`<sup>Required</sup> <a name="UseSystemProxies" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxies"></a>

```csharp
public object UseSystemProxies { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">JmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a>

---


### JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference <a name="JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.internalValue"></a>

```csharp
public JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">JmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a>

---


### JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference <a name="JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsFleetAdvancedFeatureConfiguration.JmsFleetAdvancedFeatureConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



