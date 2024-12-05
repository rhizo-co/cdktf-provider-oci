# `meteringComputationUsageCarbonEmission` Submodule <a name="`meteringComputationUsageCarbonEmission` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationUsageCarbonEmission <a name="MeteringComputationUsageCarbonEmission" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission oci_metering_computation_usage_carbon_emission}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmission(Construct Scope, string Id, MeteringComputationUsageCarbonEmissionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig">MeteringComputationUsageCarbonEmissionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig">MeteringComputationUsageCarbonEmissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag">PutGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetCompartmentDepth">ResetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupByTag">ResetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetIsAggregateByTime">ResetIsAggregateByTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetUsageCarbonEmissionFilter">ResetUsageCarbonEmissionFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGroupByTag` <a name="PutGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag"></a>

```csharp
private void PutGroupByTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts"></a>

```csharp
private void PutTimeouts(MeteringComputationUsageCarbonEmissionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

---

##### `ResetCompartmentDepth` <a name="ResetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetCompartmentDepth"></a>

```csharp
private void ResetCompartmentDepth()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetGroupByTag` <a name="ResetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupByTag"></a>

```csharp
private void ResetGroupByTag()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAggregateByTime` <a name="ResetIsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetIsAggregateByTime"></a>

```csharp
private void ResetIsAggregateByTime()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsageCarbonEmissionFilter` <a name="ResetUsageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetUsageCarbonEmissionFilter"></a>

```csharp
private void ResetUsageCarbonEmissionFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationUsageCarbonEmission resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MeteringComputationUsageCarbonEmission.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MeteringComputationUsageCarbonEmission.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MeteringComputationUsageCarbonEmission.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MeteringComputationUsageCarbonEmission.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MeteringComputationUsageCarbonEmission resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MeteringComputationUsageCarbonEmission to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MeteringComputationUsageCarbonEmission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationUsageCarbonEmission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTag">GroupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList">MeteringComputationUsageCarbonEmissionGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList">MeteringComputationUsageCarbonEmissionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepthInput">CompartmentDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByInput">GroupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTagInput">GroupByTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTimeInput">IsAggregateByTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEndedInput">TimeUsageEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStartedInput">TimeUsageStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilterInput">UsageCarbonEmissionFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepth">CompartmentDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupBy">GroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTime">IsAggregateByTime</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEnded">TimeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStarted">TimeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilter">UsageCarbonEmissionFilter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GroupByTag`<sup>Required</sup> <a name="GroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTag"></a>

```csharp
public MeteringComputationUsageCarbonEmissionGroupByTagList GroupByTag { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList">MeteringComputationUsageCarbonEmissionGroupByTagList</a>

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.items"></a>

```csharp
public MeteringComputationUsageCarbonEmissionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList">MeteringComputationUsageCarbonEmissionItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeouts"></a>

```csharp
public MeteringComputationUsageCarbonEmissionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionTimeoutsOutputReference</a>

---

##### `CompartmentDepthInput`<sup>Optional</sup> <a name="CompartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepthInput"></a>

```csharp
public double CompartmentDepthInput { get; }
```

- *Type:* double

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByInput"></a>

```csharp
public string[] GroupByInput { get; }
```

- *Type:* string[]

---

##### `GroupByTagInput`<sup>Optional</sup> <a name="GroupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTagInput"></a>

```csharp
public object GroupByTagInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAggregateByTimeInput`<sup>Optional</sup> <a name="IsAggregateByTimeInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTimeInput"></a>

```csharp
public object IsAggregateByTimeInput { get; }
```

- *Type:* object

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeUsageEndedInput`<sup>Optional</sup> <a name="TimeUsageEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEndedInput"></a>

```csharp
public string TimeUsageEndedInput { get; }
```

- *Type:* string

---

##### `TimeUsageStartedInput`<sup>Optional</sup> <a name="TimeUsageStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStartedInput"></a>

```csharp
public string TimeUsageStartedInput { get; }
```

- *Type:* string

---

##### `UsageCarbonEmissionFilterInput`<sup>Optional</sup> <a name="UsageCarbonEmissionFilterInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilterInput"></a>

```csharp
public string UsageCarbonEmissionFilterInput { get; }
```

- *Type:* string

---

##### `CompartmentDepth`<sup>Required</sup> <a name="CompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepth"></a>

```csharp
public double CompartmentDepth { get; }
```

- *Type:* double

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupBy"></a>

```csharp
public string[] GroupBy { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAggregateByTime`<sup>Required</sup> <a name="IsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTime"></a>

```csharp
public object IsAggregateByTime { get; }
```

- *Type:* object

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeUsageEnded`<sup>Required</sup> <a name="TimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEnded"></a>

```csharp
public string TimeUsageEnded { get; }
```

- *Type:* string

---

##### `TimeUsageStarted`<sup>Required</sup> <a name="TimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStarted"></a>

```csharp
public string TimeUsageStarted { get; }
```

- *Type:* string

---

##### `UsageCarbonEmissionFilter`<sup>Required</sup> <a name="UsageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilter"></a>

```csharp
public string UsageCarbonEmissionFilter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationUsageCarbonEmissionConfig <a name="MeteringComputationUsageCarbonEmissionConfig" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TenantId,
    string TimeUsageEnded,
    string TimeUsageStarted,
    double CompartmentDepth = null,
    string[] GroupBy = null,
    object GroupByTag = null,
    string Id = null,
    object IsAggregateByTime = null,
    MeteringComputationUsageCarbonEmissionTimeouts Timeouts = null,
    string UsageCarbonEmissionFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageEnded">TimeUsageEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageStarted">TimeUsageStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.compartmentDepth">CompartmentDepth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupBy">GroupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupByTag">GroupByTag</a></code> | <code>object</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.isAggregateByTime">IsAggregateByTime</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.usageCarbonEmissionFilter">UsageCarbonEmissionFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}.

---

##### `TimeUsageEnded`<sup>Required</sup> <a name="TimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageEnded"></a>

```csharp
public string TimeUsageEnded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}.

---

##### `TimeUsageStarted`<sup>Required</sup> <a name="TimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageStarted"></a>

```csharp
public string TimeUsageStarted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}.

---

##### `CompartmentDepth`<sup>Optional</sup> <a name="CompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.compartmentDepth"></a>

```csharp
public double CompartmentDepth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}.

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupBy"></a>

```csharp
public string[] GroupBy { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}.

---

##### `GroupByTag`<sup>Optional</sup> <a name="GroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupByTag"></a>

```csharp
public object GroupByTag { get; set; }
```

- *Type:* object

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by_tag MeteringComputationUsageCarbonEmission#group_by_tag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAggregateByTime`<sup>Optional</sup> <a name="IsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.isAggregateByTime"></a>

```csharp
public object IsAggregateByTime { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeouts"></a>

```csharp
public MeteringComputationUsageCarbonEmissionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#timeouts MeteringComputationUsageCarbonEmission#timeouts}

---

##### `UsageCarbonEmissionFilter`<sup>Optional</sup> <a name="UsageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.usageCarbonEmissionFilter"></a>

```csharp
public string UsageCarbonEmissionFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}.

---

### MeteringComputationUsageCarbonEmissionGroupByTag <a name="MeteringComputationUsageCarbonEmissionGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionGroupByTag {
    string Key = null,
    string Namespace = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#key MeteringComputationUsageCarbonEmission#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#namespace MeteringComputationUsageCarbonEmission#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#value MeteringComputationUsageCarbonEmission#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#key MeteringComputationUsageCarbonEmission#key}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#namespace MeteringComputationUsageCarbonEmission#namespace}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#value MeteringComputationUsageCarbonEmission#value}.

---

### MeteringComputationUsageCarbonEmissionItems <a name="MeteringComputationUsageCarbonEmissionItems" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionItems {

};
```


### MeteringComputationUsageCarbonEmissionItemsTags <a name="MeteringComputationUsageCarbonEmissionItemsTags" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionItemsTags {

};
```


### MeteringComputationUsageCarbonEmissionTimeouts <a name="MeteringComputationUsageCarbonEmissionTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationUsageCarbonEmissionGroupByTagList <a name="MeteringComputationUsageCarbonEmissionGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionGroupByTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get"></a>

```csharp
private MeteringComputationUsageCarbonEmissionGroupByTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MeteringComputationUsageCarbonEmissionGroupByTagOutputReference <a name="MeteringComputationUsageCarbonEmissionGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionGroupByTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MeteringComputationUsageCarbonEmissionItemsList <a name="MeteringComputationUsageCarbonEmissionItemsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get"></a>

```csharp
private MeteringComputationUsageCarbonEmissionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MeteringComputationUsageCarbonEmissionItemsOutputReference <a name="MeteringComputationUsageCarbonEmissionItemsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.ad">Ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentName">CompartmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentPath">CompartmentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.computedCarbonEmission">ComputedCarbonEmission</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.emissionCalculationMethod">EmissionCalculationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuPartNumber">SkuPartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList">MeteringComputationUsageCarbonEmissionItemsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantName">TenantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageEnded">TimeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageStarted">TimeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems">MeteringComputationUsageCarbonEmissionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.ad"></a>

```csharp
public string Ad { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentName`<sup>Required</sup> <a name="CompartmentName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentName"></a>

```csharp
public string CompartmentName { get; }
```

- *Type:* string

---

##### `CompartmentPath`<sup>Required</sup> <a name="CompartmentPath" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentPath"></a>

```csharp
public string CompartmentPath { get; }
```

- *Type:* string

---

##### `ComputedCarbonEmission`<sup>Required</sup> <a name="ComputedCarbonEmission" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.computedCarbonEmission"></a>

```csharp
public double ComputedCarbonEmission { get; }
```

- *Type:* double

---

##### `EmissionCalculationMethod`<sup>Required</sup> <a name="EmissionCalculationMethod" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.emissionCalculationMethod"></a>

```csharp
public string EmissionCalculationMethod { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `SkuPartNumber`<sup>Required</sup> <a name="SkuPartNumber" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuPartNumber"></a>

```csharp
public string SkuPartNumber { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tags"></a>

```csharp
public MeteringComputationUsageCarbonEmissionItemsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList">MeteringComputationUsageCarbonEmissionItemsTagsList</a>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantName"></a>

```csharp
public string TenantName { get; }
```

- *Type:* string

---

##### `TimeUsageEnded`<sup>Required</sup> <a name="TimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageEnded"></a>

```csharp
public string TimeUsageEnded { get; }
```

- *Type:* string

---

##### `TimeUsageStarted`<sup>Required</sup> <a name="TimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageStarted"></a>

```csharp
public string TimeUsageStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.internalValue"></a>

```csharp
public MeteringComputationUsageCarbonEmissionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems">MeteringComputationUsageCarbonEmissionItems</a>

---


### MeteringComputationUsageCarbonEmissionItemsTagsList <a name="MeteringComputationUsageCarbonEmissionItemsTagsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionItemsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get"></a>

```csharp
private MeteringComputationUsageCarbonEmissionItemsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MeteringComputationUsageCarbonEmissionItemsTagsOutputReference <a name="MeteringComputationUsageCarbonEmissionItemsTagsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionItemsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags">MeteringComputationUsageCarbonEmissionItemsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.internalValue"></a>

```csharp
public MeteringComputationUsageCarbonEmissionItemsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags">MeteringComputationUsageCarbonEmissionItemsTags</a>

---


### MeteringComputationUsageCarbonEmissionTimeoutsOutputReference <a name="MeteringComputationUsageCarbonEmissionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MeteringComputationUsageCarbonEmissionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



