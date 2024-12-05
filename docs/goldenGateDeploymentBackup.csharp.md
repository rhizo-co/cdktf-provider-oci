# `goldenGateDeploymentBackup` Submodule <a name="`goldenGateDeploymentBackup` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDeploymentBackup <a name="GoldenGateDeploymentBackup" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup oci_golden_gate_deployment_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentBackup(Construct Scope, string Id, GoldenGateDeploymentBackupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig">GoldenGateDeploymentBackupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig">GoldenGateDeploymentBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsMetadataOnly">ResetIsMetadataOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts"></a>

```csharp
private void PutTimeouts(GoldenGateDeploymentBackupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsLockOverride"></a>

```csharp
private void ResetIsLockOverride()
```

##### `ResetIsMetadataOnly` <a name="ResetIsMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsMetadataOnly"></a>

```csharp
private void ResetIsMetadataOnly()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateDeploymentBackup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateDeploymentBackup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateDeploymentBackup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateDeploymentBackup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateDeploymentBackup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoldenGateDeploymentBackup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoldenGateDeploymentBackup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoldenGateDeploymentBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDeploymentBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.backupType">BackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isAutomatic">IsAutomatic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList">GoldenGateDeploymentBackupLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.oggVersion">OggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.sizeInBytes">SizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeBackupFinished">TimeBackupFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeOfBackup">TimeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference">GoldenGateDeploymentBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnlyInput">IsMetadataOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnly">IsMetadataOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.object">Object</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.backupType"></a>

```csharp
public string BackupType { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `IsAutomatic`<sup>Required</sup> <a name="IsAutomatic" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isAutomatic"></a>

```csharp
public IResolvable IsAutomatic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locks"></a>

```csharp
public GoldenGateDeploymentBackupLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList">GoldenGateDeploymentBackupLocksList</a>

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.oggVersion"></a>

```csharp
public string OggVersion { get; }
```

- *Type:* string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.sizeInBytes"></a>

```csharp
public double SizeInBytes { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeBackupFinished`<sup>Required</sup> <a name="TimeBackupFinished" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeBackupFinished"></a>

```csharp
public string TimeBackupFinished { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeOfBackup"></a>

```csharp
public string TimeOfBackup { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeouts"></a>

```csharp
public GoldenGateDeploymentBackupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference">GoldenGateDeploymentBackupTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverrideInput"></a>

```csharp
public object IsLockOverrideInput { get; }
```

- *Type:* object

---

##### `IsMetadataOnlyInput`<sup>Optional</sup> <a name="IsMetadataOnlyInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnlyInput"></a>

```csharp
public object IsMetadataOnlyInput { get; }
```

- *Type:* object

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; }
```

- *Type:* object

---

##### `IsMetadataOnly`<sup>Required</sup> <a name="IsMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnly"></a>

```csharp
public object IsMetadataOnly { get; }
```

- *Type:* object

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDeploymentBackupConfig <a name="GoldenGateDeploymentBackupConfig" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentBackupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string CompartmentId,
    string DeploymentId,
    string DisplayName,
    string Namespace,
    string Object,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsLockOverride = null,
    object IsMetadataOnly = null,
    object Locks = null,
    GoldenGateDeploymentBackupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isMetadataOnly">IsMetadataOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}.

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}.

---

##### `IsMetadataOnly`<sup>Optional</sup> <a name="IsMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isMetadataOnly"></a>

```csharp
public object IsMetadataOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#locks GoldenGateDeploymentBackup#locks}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.timeouts"></a>

```csharp
public GoldenGateDeploymentBackupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#timeouts GoldenGateDeploymentBackup#timeouts}

---

### GoldenGateDeploymentBackupLocks <a name="GoldenGateDeploymentBackupLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentBackupLocks {
    string Type,
    string Message = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#type GoldenGateDeploymentBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#message GoldenGateDeploymentBackup#message}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#type GoldenGateDeploymentBackup#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#message GoldenGateDeploymentBackup#message}.

---

### GoldenGateDeploymentBackupTimeouts <a name="GoldenGateDeploymentBackupTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentBackupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#create GoldenGateDeploymentBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#delete GoldenGateDeploymentBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#update GoldenGateDeploymentBackup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#create GoldenGateDeploymentBackup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#delete GoldenGateDeploymentBackup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#update GoldenGateDeploymentBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDeploymentBackupLocksList <a name="GoldenGateDeploymentBackupLocksList" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentBackupLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get"></a>

```csharp
private GoldenGateDeploymentBackupLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateDeploymentBackupLocksOutputReference <a name="GoldenGateDeploymentBackupLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentBackupLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateDeploymentBackupTimeoutsOutputReference <a name="GoldenGateDeploymentBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateDeploymentBackupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



