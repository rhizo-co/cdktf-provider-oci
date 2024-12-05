# `apmSyntheticsOnPremiseVantagePoint` Submodule <a name="`apmSyntheticsOnPremiseVantagePoint` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsOnPremiseVantagePoint <a name="ApmSyntheticsOnPremiseVantagePoint" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point oci_apm_synthetics_on_premise_vantage_point}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePoint(Construct Scope, string Id, ApmSyntheticsOnPremiseVantagePointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig">ApmSyntheticsOnPremiseVantagePointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig">ApmSyntheticsOnPremiseVantagePointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.putTimeouts"></a>

```csharp
private void PutTimeouts(ApmSyntheticsOnPremiseVantagePointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ApmSyntheticsOnPremiseVantagePoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ApmSyntheticsOnPremiseVantagePoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ApmSyntheticsOnPremiseVantagePoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ApmSyntheticsOnPremiseVantagePoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApmSyntheticsOnPremiseVantagePoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApmSyntheticsOnPremiseVantagePoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsOnPremiseVantagePoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.workersSummary">WorkersSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList">ApmSyntheticsOnPremiseVantagePointWorkersSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeouts"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `WorkersSummary`<sup>Required</sup> <a name="WorkersSummary" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.workersSummary"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkersSummaryList WorkersSummary { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList">ApmSyntheticsOnPremiseVantagePointWorkersSummaryList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.apmDomainIdInput"></a>

```csharp
public string ApmDomainIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsOnPremiseVantagePointConfig <a name="ApmSyntheticsOnPremiseVantagePointConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApmDomainId,
    string Name,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    ApmSyntheticsOnPremiseVantagePointTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#apm_domain_id ApmSyntheticsOnPremiseVantagePoint#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#name ApmSyntheticsOnPremiseVantagePoint#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#defined_tags ApmSyntheticsOnPremiseVantagePoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#description ApmSyntheticsOnPremiseVantagePoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#freeform_tags ApmSyntheticsOnPremiseVantagePoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#id ApmSyntheticsOnPremiseVantagePoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#type ApmSyntheticsOnPremiseVantagePoint#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#apm_domain_id ApmSyntheticsOnPremiseVantagePoint#apm_domain_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#name ApmSyntheticsOnPremiseVantagePoint#name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#defined_tags ApmSyntheticsOnPremiseVantagePoint#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#description ApmSyntheticsOnPremiseVantagePoint#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#freeform_tags ApmSyntheticsOnPremiseVantagePoint#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#id ApmSyntheticsOnPremiseVantagePoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.timeouts"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts">ApmSyntheticsOnPremiseVantagePointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#timeouts ApmSyntheticsOnPremiseVantagePoint#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#type ApmSyntheticsOnPremiseVantagePoint#type}.

---

### ApmSyntheticsOnPremiseVantagePointTimeouts <a name="ApmSyntheticsOnPremiseVantagePointTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#create ApmSyntheticsOnPremiseVantagePoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#delete ApmSyntheticsOnPremiseVantagePoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#update ApmSyntheticsOnPremiseVantagePoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#create ApmSyntheticsOnPremiseVantagePoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#delete ApmSyntheticsOnPremiseVantagePoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point#update ApmSyntheticsOnPremiseVantagePoint#update}.

---

### ApmSyntheticsOnPremiseVantagePointWorkersSummary <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummary" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkersSummary {

};
```


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.get"></a>

```csharp
private ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.capability">Capability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount">OnPremiseVantagePointCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities">ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.capability"></a>

```csharp
public string Capability { get; }
```

- *Type:* string

---

##### `OnPremiseVantagePointCount`<sup>Required</sup> <a name="OnPremiseVantagePointCount" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount"></a>

```csharp
public double OnPremiseVantagePointCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities">ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryList <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkersSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.get"></a>

```csharp
private ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.available">Available</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.availableCapabilities">AvailableCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList">ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.disabled">Disabled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.minVersion">MinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.total">Total</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.used">Used</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummary">ApmSyntheticsOnPremiseVantagePointWorkersSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Available`<sup>Required</sup> <a name="Available" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.available"></a>

```csharp
public double Available { get; }
```

- *Type:* double

---

##### `AvailableCapabilities`<sup>Required</sup> <a name="AvailableCapabilities" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.availableCapabilities"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList AvailableCapabilities { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList">ApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.disabled"></a>

```csharp
public double Disabled { get; }
```

- *Type:* double

---

##### `MinVersion`<sup>Required</sup> <a name="MinVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.minVersion"></a>

```csharp
public string MinVersion { get; }
```

- *Type:* string

---

##### `Total`<sup>Required</sup> <a name="Total" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.total"></a>

```csharp
public double Total { get; }
```

- *Type:* double

---

##### `Used`<sup>Required</sup> <a name="Used" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.used"></a>

```csharp
public double Used { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference.property.internalValue"></a>

```csharp
public ApmSyntheticsOnPremiseVantagePointWorkersSummary InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePoint.ApmSyntheticsOnPremiseVantagePointWorkersSummary">ApmSyntheticsOnPremiseVantagePointWorkersSummary</a>

---


