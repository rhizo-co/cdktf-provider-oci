# `dataSafeMaskingPolicyHealthReportManagement` Submodule <a name="`dataSafeMaskingPolicyHealthReportManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPolicyHealthReportManagement <a name="DataSafeMaskingPolicyHealthReportManagement" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management oci_data_safe_masking_policy_health_report_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyHealthReportManagement(Construct Scope, string Id, DataSafeMaskingPolicyHealthReportManagementConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig">DataSafeMaskingPolicyHealthReportManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig">DataSafeMaskingPolicyHealthReportManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetMaskingPolicyId">ResetMaskingPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeMaskingPolicyHealthReportManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts">DataSafeMaskingPolicyHealthReportManagementTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetMaskingPolicyId` <a name="ResetMaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetMaskingPolicyId"></a>

```csharp
private void ResetMaskingPolicyId()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeMaskingPolicyHealthReportManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPolicyHealthReportManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPolicyHealthReportManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPolicyHealthReportManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPolicyHealthReportManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeMaskingPolicyHealthReportManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeMaskingPolicyHealthReportManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeMaskingPolicyHealthReportManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPolicyHealthReportManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference">DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.timeouts"></a>

```csharp
public DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference">DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.maskingPolicyIdInput"></a>

```csharp
public string MaskingPolicyIdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPolicyHealthReportManagementConfig <a name="DataSafeMaskingPolicyHealthReportManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyHealthReportManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string MaskingPolicyId = null,
    string TargetId = null,
    DataSafeMaskingPolicyHealthReportManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#compartment_id DataSafeMaskingPolicyHealthReportManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#masking_policy_id DataSafeMaskingPolicyHealthReportManagement#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#target_id DataSafeMaskingPolicyHealthReportManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts">DataSafeMaskingPolicyHealthReportManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#compartment_id DataSafeMaskingPolicyHealthReportManagement#compartment_id}.

---

##### `MaskingPolicyId`<sup>Optional</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#masking_policy_id DataSafeMaskingPolicyHealthReportManagement#masking_policy_id}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#target_id DataSafeMaskingPolicyHealthReportManagement#target_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementConfig.property.timeouts"></a>

```csharp
public DataSafeMaskingPolicyHealthReportManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts">DataSafeMaskingPolicyHealthReportManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#timeouts DataSafeMaskingPolicyHealthReportManagement#timeouts}

---

### DataSafeMaskingPolicyHealthReportManagementTimeouts <a name="DataSafeMaskingPolicyHealthReportManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyHealthReportManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#create DataSafeMaskingPolicyHealthReportManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#delete DataSafeMaskingPolicyHealthReportManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#update DataSafeMaskingPolicyHealthReportManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#create DataSafeMaskingPolicyHealthReportManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#delete DataSafeMaskingPolicyHealthReportManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy_health_report_management#update DataSafeMaskingPolicyHealthReportManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference <a name="DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicyHealthReportManagement.DataSafeMaskingPolicyHealthReportManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



