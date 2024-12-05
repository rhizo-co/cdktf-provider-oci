# `apmSyntheticsOnPremiseVantagePointWorker` Submodule <a name="`apmSyntheticsOnPremiseVantagePointWorker` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsOnPremiseVantagePointWorker <a name="ApmSyntheticsOnPremiseVantagePointWorker" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker oci_apm_synthetics_on_premise_vantage_point_worker}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorker(Construct Scope, string Id, ApmSyntheticsOnPremiseVantagePointWorkerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig">ApmSyntheticsOnPremiseVantagePointWorkerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig">ApmSyntheticsOnPremiseVantagePointWorkerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetConfigurationDetails">ResetConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts"></a>

```csharp
private void PutTimeouts(ApmSyntheticsOnPremiseVantagePointWorkerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

---

##### `ResetConfigurationDetails` <a name="ResetConfigurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetConfigurationDetails"></a>

```csharp
private void ResetConfigurationDetails()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetWorkerType"></a>

```csharp
private void ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ApmSyntheticsOnPremiseVantagePointWorker.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ApmSyntheticsOnPremiseVantagePointWorker.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ApmSyntheticsOnPremiseVantagePointWorker.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ApmSyntheticsOnPremiseVantagePointWorker.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApmSyntheticsOnPremiseVantagePointWorker to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApmSyntheticsOnPremiseVantagePointWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsOnPremiseVantagePointWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo">GeoInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo">IdentityInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.monitorList">MonitorList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpId">OpvpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpName">OpvpName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId">RuntimeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp">TimeLastSyncUp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails">VersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetailsInput">ConfigurationDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput">OnPremiseVantagePointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKeyInput">ResourcePrincipalTokenPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerTypeInput">WorkerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails">ConfigurationDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId">OnPremiseVantagePointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey">ResourcePrincipalTokenPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerType">WorkerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GeoInfo`<sup>Required</sup> <a name="GeoInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo"></a>

```csharp
public string GeoInfo { get; }
```

- *Type:* string

---

##### `IdentityInfo`<sup>Required</sup> <a name="IdentityInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList IdentityInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a>

---

##### `MonitorList`<sup>Required</sup> <a name="MonitorList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.monitorList"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList MonitorList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a>

---

##### `OpvpId`<sup>Required</sup> <a name="OpvpId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpId"></a>

```csharp
public string OpvpId { get; }
```

- *Type:* string

---

##### `OpvpName`<sup>Required</sup> <a name="OpvpName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpName"></a>

```csharp
public string OpvpName { get; }
```

- *Type:* string

---

##### `RuntimeId`<sup>Required</sup> <a name="RuntimeId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId"></a>

```csharp
public string RuntimeId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastSyncUp`<sup>Required</sup> <a name="TimeLastSyncUp" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp"></a>

```csharp
public string TimeLastSyncUp { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeouts"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VersionDetails`<sup>Required</sup> <a name="VersionDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList VersionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput"></a>

```csharp
public string ApmDomainIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationDetailsInput`<sup>Optional</sup> <a name="ConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetailsInput"></a>

```csharp
public string ConfigurationDetailsInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnPremiseVantagePointIdInput`<sup>Optional</sup> <a name="OnPremiseVantagePointIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput"></a>

```csharp
public string OnPremiseVantagePointIdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ResourcePrincipalTokenPublicKeyInput`<sup>Optional</sup> <a name="ResourcePrincipalTokenPublicKeyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKeyInput"></a>

```csharp
public string ResourcePrincipalTokenPublicKeyInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerTypeInput"></a>

```csharp
public string WorkerTypeInput { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `ConfigurationDetails`<sup>Required</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails"></a>

```csharp
public string ConfigurationDetails { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnPremiseVantagePointId`<sup>Required</sup> <a name="OnPremiseVantagePointId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId"></a>

```csharp
public string OnPremiseVantagePointId { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ResourcePrincipalTokenPublicKey`<sup>Required</sup> <a name="ResourcePrincipalTokenPublicKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey"></a>

```csharp
public string ResourcePrincipalTokenPublicKey { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerType"></a>

```csharp
public string WorkerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsOnPremiseVantagePointWorkerConfig <a name="ApmSyntheticsOnPremiseVantagePointWorkerConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApmDomainId,
    string Name,
    string OnPremiseVantagePointId,
    string ResourcePrincipalTokenPublicKey,
    string Version,
    string ConfigurationDetails = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    double Priority = null,
    string Status = null,
    ApmSyntheticsOnPremiseVantagePointWorkerTimeouts Timeouts = null,
    string WorkerType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId">OnPremiseVantagePointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.resourcePrincipalTokenPublicKey">ResourcePrincipalTokenPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.configurationDetails">ConfigurationDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerType">WorkerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}.

---

##### `OnPremiseVantagePointId`<sup>Required</sup> <a name="OnPremiseVantagePointId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId"></a>

```csharp
public string OnPremiseVantagePointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}.

---

##### `ResourcePrincipalTokenPublicKey`<sup>Required</sup> <a name="ResourcePrincipalTokenPublicKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.resourcePrincipalTokenPublicKey"></a>

```csharp
public string ResourcePrincipalTokenPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}.

---

##### `ConfigurationDetails`<sup>Optional</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.configurationDetails"></a>

```csharp
public string ConfigurationDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.timeouts"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#timeouts ApmSyntheticsOnPremiseVantagePointWorker#timeouts}

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerType"></a>

```csharp
public string WorkerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}.

---

### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo {

};
```


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct {

};
```


### ApmSyntheticsOnPremiseVantagePointWorkerTimeouts <a name="ApmSyntheticsOnPremiseVantagePointWorkerTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}.

---

### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get"></a>

```csharp
private ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId">ApmShortId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint">CollectorEndPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApmShortId`<sup>Required</sup> <a name="ApmShortId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId"></a>

```csharp
public string ApmShortId { get; }
```

- *Type:* string

---

##### `CollectorEndPoint`<sup>Required</sup> <a name="CollectorEndPoint" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint"></a>

```csharp
public string CollectorEndPoint { get; }
```

- *Type:* string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get"></a>

```csharp
private ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow">IsRunNow</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType">MonitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned">TimeAssigned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRunNow`<sup>Required</sup> <a name="IsRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow"></a>

```csharp
public IResolvable IsRunNow { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType"></a>

```csharp
public string MonitorType { get; }
```

- *Type:* string

---

##### `TimeAssigned`<sup>Required</sup> <a name="TimeAssigned" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned"></a>

```csharp
public string TimeAssigned { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get"></a>

```csharp
private ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion">LatestVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion">MinSupportedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion"></a>

```csharp
public string LatestVersion { get; }
```

- *Type:* string

---

##### `MinSupportedVersion`<sup>Required</sup> <a name="MinSupportedVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion"></a>

```csharp
public string MinSupportedVersion { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a>

---



