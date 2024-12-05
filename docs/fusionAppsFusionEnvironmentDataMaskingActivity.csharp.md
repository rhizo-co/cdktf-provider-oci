# `fusionAppsFusionEnvironmentDataMaskingActivity` Submodule <a name="`fusionAppsFusionEnvironmentDataMaskingActivity` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentDataMaskingActivity <a name="FusionAppsFusionEnvironmentDataMaskingActivity" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity oci_fusion_apps_fusion_environment_data_masking_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentDataMaskingActivity(Construct Scope, string Id, FusionAppsFusionEnvironmentDataMaskingActivityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig">FusionAppsFusionEnvironmentDataMaskingActivityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig">FusionAppsFusionEnvironmentDataMaskingActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetIsResumeDataMasking">ResetIsResumeDataMasking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.putTimeouts"></a>

```csharp
private void PutTimeouts(FusionAppsFusionEnvironmentDataMaskingActivityTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsResumeDataMasking` <a name="ResetIsResumeDataMasking" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetIsResumeDataMasking"></a>

```csharp
private void ResetIsResumeDataMasking()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FusionAppsFusionEnvironmentDataMaskingActivity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FusionAppsFusionEnvironmentDataMaskingActivity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FusionAppsFusionEnvironmentDataMaskingActivity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FusionAppsFusionEnvironmentDataMaskingActivity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FusionAppsFusionEnvironmentDataMaskingActivity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FusionAppsFusionEnvironmentDataMaskingActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentDataMaskingActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish">TimeMaskingFinish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart">TimeMaskingStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference">FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput">FusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMaskingInput">IsResumeDataMaskingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking">IsResumeDataMasking</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeMaskingFinish`<sup>Required</sup> <a name="TimeMaskingFinish" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish"></a>

```csharp
public string TimeMaskingFinish { get; }
```

- *Type:* string

---

##### `TimeMaskingStart`<sup>Required</sup> <a name="TimeMaskingStart" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart"></a>

```csharp
public string TimeMaskingStart { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeouts"></a>

```csharp
public FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference">FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference</a>

---

##### `FusionEnvironmentIdInput`<sup>Optional</sup> <a name="FusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput"></a>

```csharp
public string FusionEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsResumeDataMaskingInput`<sup>Optional</sup> <a name="IsResumeDataMaskingInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMaskingInput"></a>

```csharp
public object IsResumeDataMaskingInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId"></a>

```csharp
public string FusionEnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsResumeDataMasking`<sup>Required</sup> <a name="IsResumeDataMasking" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking"></a>

```csharp
public object IsResumeDataMasking { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentDataMaskingActivityConfig <a name="FusionAppsFusionEnvironmentDataMaskingActivityConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentDataMaskingActivityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FusionEnvironmentId,
    string Id = null,
    object IsResumeDataMasking = null,
    FusionAppsFusionEnvironmentDataMaskingActivityTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id FusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#id FusionAppsFusionEnvironmentDataMaskingActivity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.isResumeDataMasking">IsResumeDataMasking</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#is_resume_data_masking FusionAppsFusionEnvironmentDataMaskingActivity#is_resume_data_masking}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId"></a>

```csharp
public string FusionEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id FusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#id FusionAppsFusionEnvironmentDataMaskingActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsResumeDataMasking`<sup>Optional</sup> <a name="IsResumeDataMasking" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.isResumeDataMasking"></a>

```csharp
public object IsResumeDataMasking { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#is_resume_data_masking FusionAppsFusionEnvironmentDataMaskingActivity#is_resume_data_masking}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityConfig.property.timeouts"></a>

```csharp
public FusionAppsFusionEnvironmentDataMaskingActivityTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts">FusionAppsFusionEnvironmentDataMaskingActivityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#timeouts FusionAppsFusionEnvironmentDataMaskingActivity#timeouts}

---

### FusionAppsFusionEnvironmentDataMaskingActivityTimeouts <a name="FusionAppsFusionEnvironmentDataMaskingActivityTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentDataMaskingActivityTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#create FusionAppsFusionEnvironmentDataMaskingActivity#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#delete FusionAppsFusionEnvironmentDataMaskingActivity#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#update FusionAppsFusionEnvironmentDataMaskingActivity#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#create FusionAppsFusionEnvironmentDataMaskingActivity#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#delete FusionAppsFusionEnvironmentDataMaskingActivity#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_data_masking_activity#update FusionAppsFusionEnvironmentDataMaskingActivity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentDataMaskingActivity.FusionAppsFusionEnvironmentDataMaskingActivityTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



