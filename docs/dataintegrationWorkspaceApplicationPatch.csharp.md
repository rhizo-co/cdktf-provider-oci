# `dataintegrationWorkspaceApplicationPatch` Submodule <a name="`dataintegrationWorkspaceApplicationPatch` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceApplicationPatch <a name="DataintegrationWorkspaceApplicationPatch" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch oci_dataintegration_workspace_application_patch}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatch(Construct Scope, string Id, DataintegrationWorkspaceApplicationPatchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig">DataintegrationWorkspaceApplicationPatchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig">DataintegrationWorkspaceApplicationPatchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata">PutRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetModelVersion">ResetModelVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetObjectKeys">ResetObjectKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetObjectStatus">ResetObjectStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetRegistryMetadata">ResetRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRegistryMetadata` <a name="PutRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata"></a>

```csharp
private void PutRegistryMetadata(DataintegrationWorkspaceApplicationPatchRegistryMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putTimeouts"></a>

```csharp
private void PutTimeouts(DataintegrationWorkspaceApplicationPatchTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetModelVersion` <a name="ResetModelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetModelVersion"></a>

```csharp
private void ResetModelVersion()
```

##### `ResetObjectKeys` <a name="ResetObjectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetObjectKeys"></a>

```csharp
private void ResetObjectKeys()
```

##### `ResetObjectStatus` <a name="ResetObjectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetObjectStatus"></a>

```csharp
private void ResetObjectStatus()
```

##### `ResetRegistryMetadata` <a name="ResetRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetRegistryMetadata"></a>

```csharp
private void ResetRegistryMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceApplicationPatch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceApplicationPatch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceApplicationPatch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceApplicationPatch.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceApplicationPatch.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataintegrationWorkspaceApplicationPatch resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataintegrationWorkspaceApplicationPatch to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataintegrationWorkspaceApplicationPatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceApplicationPatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationVersion">ApplicationVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.dependentObjectMetadata">DependentObjectMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList">DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.errorMessages">ErrorMessages</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.keyMap">KeyMap</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList">DataintegrationWorkspaceApplicationPatchMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelType">ModelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectVersion">ObjectVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.parentRef">ParentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList">DataintegrationWorkspaceApplicationPatchParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchObjectMetadata">PatchObjectMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList">DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchStatus">PatchStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.registryMetadata">RegistryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference">DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timePatched">TimePatched</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationKeyInput">ApplicationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelVersionInput">ModelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectKeysInput">ObjectKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectStatusInput">ObjectStatusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchTypeInput">PatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.registryMetadataInput">RegistryMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationKey">ApplicationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelVersion">ModelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectKeys">ObjectKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectStatus">ObjectStatus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchType">PatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationVersion`<sup>Required</sup> <a name="ApplicationVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationVersion"></a>

```csharp
public double ApplicationVersion { get; }
```

- *Type:* double

---

##### `DependentObjectMetadata`<sup>Required</sup> <a name="DependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.dependentObjectMetadata"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList DependentObjectMetadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList">DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList</a>

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.errorMessages"></a>

```csharp
public StringMap ErrorMessages { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `KeyMap`<sup>Required</sup> <a name="KeyMap" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.keyMap"></a>

```csharp
public StringMap KeyMap { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.metadata"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchMetadataList Metadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList">DataintegrationWorkspaceApplicationPatchMetadataList</a>

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelType"></a>

```csharp
public string ModelType { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectVersion"></a>

```csharp
public double ObjectVersion { get; }
```

- *Type:* double

---

##### `ParentRef`<sup>Required</sup> <a name="ParentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.parentRef"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchParentRefList ParentRef { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList">DataintegrationWorkspaceApplicationPatchParentRefList</a>

---

##### `PatchObjectMetadata`<sup>Required</sup> <a name="PatchObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchObjectMetadata"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList PatchObjectMetadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList">DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList</a>

---

##### `PatchStatus`<sup>Required</sup> <a name="PatchStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchStatus"></a>

```csharp
public string PatchStatus { get; }
```

- *Type:* string

---

##### `RegistryMetadata`<sup>Required</sup> <a name="RegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.registryMetadata"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference RegistryMetadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timeouts"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference">DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference</a>

---

##### `TimePatched`<sup>Required</sup> <a name="TimePatched" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timePatched"></a>

```csharp
public string TimePatched { get; }
```

- *Type:* string

---

##### `ApplicationKeyInput`<sup>Optional</sup> <a name="ApplicationKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationKeyInput"></a>

```csharp
public string ApplicationKeyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ModelVersionInput`<sup>Optional</sup> <a name="ModelVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelVersionInput"></a>

```csharp
public string ModelVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectKeysInput`<sup>Optional</sup> <a name="ObjectKeysInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectKeysInput"></a>

```csharp
public string[] ObjectKeysInput { get; }
```

- *Type:* string[]

---

##### `ObjectStatusInput`<sup>Optional</sup> <a name="ObjectStatusInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectStatusInput"></a>

```csharp
public double ObjectStatusInput { get; }
```

- *Type:* double

---

##### `PatchTypeInput`<sup>Optional</sup> <a name="PatchTypeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchTypeInput"></a>

```csharp
public string PatchTypeInput { get; }
```

- *Type:* string

---

##### `RegistryMetadataInput`<sup>Optional</sup> <a name="RegistryMetadataInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.registryMetadataInput"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchRegistryMetadata RegistryMetadataInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationKey"></a>

```csharp
public string ApplicationKey { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelVersion"></a>

```csharp
public string ModelVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectKeys`<sup>Required</sup> <a name="ObjectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectKeys"></a>

```csharp
public string[] ObjectKeys { get; }
```

- *Type:* string[]

---

##### `ObjectStatus`<sup>Required</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectStatus"></a>

```csharp
public double ObjectStatus { get; }
```

- *Type:* double

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchType"></a>

```csharp
public string PatchType { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceApplicationPatchConfig <a name="DataintegrationWorkspaceApplicationPatchConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationKey,
    string Name,
    string PatchType,
    string WorkspaceId,
    string Description = null,
    string Id = null,
    string Identifier = null,
    string Key = null,
    string ModelVersion = null,
    string[] ObjectKeys = null,
    double ObjectStatus = null,
    DataintegrationWorkspaceApplicationPatchRegistryMetadata RegistryMetadata = null,
    DataintegrationWorkspaceApplicationPatchTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.applicationKey">ApplicationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#application_key DataintegrationWorkspaceApplicationPatch#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#name DataintegrationWorkspaceApplicationPatch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.patchType">PatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#patch_type DataintegrationWorkspaceApplicationPatch#patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#workspace_id DataintegrationWorkspaceApplicationPatch#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#description DataintegrationWorkspaceApplicationPatch#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#id DataintegrationWorkspaceApplicationPatch#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#identifier DataintegrationWorkspaceApplicationPatch#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.modelVersion">ModelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#model_version DataintegrationWorkspaceApplicationPatch#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.objectKeys">ObjectKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_keys DataintegrationWorkspaceApplicationPatch#object_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.objectStatus">ObjectStatus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_status DataintegrationWorkspaceApplicationPatch#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.registryMetadata">RegistryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.applicationKey"></a>

```csharp
public string ApplicationKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#application_key DataintegrationWorkspaceApplicationPatch#application_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#name DataintegrationWorkspaceApplicationPatch#name}.

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.patchType"></a>

```csharp
public string PatchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#patch_type DataintegrationWorkspaceApplicationPatch#patch_type}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#workspace_id DataintegrationWorkspaceApplicationPatch#workspace_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#description DataintegrationWorkspaceApplicationPatch#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#id DataintegrationWorkspaceApplicationPatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#identifier DataintegrationWorkspaceApplicationPatch#identifier}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}.

---

##### `ModelVersion`<sup>Optional</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.modelVersion"></a>

```csharp
public string ModelVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#model_version DataintegrationWorkspaceApplicationPatch#model_version}.

---

##### `ObjectKeys`<sup>Optional</sup> <a name="ObjectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.objectKeys"></a>

```csharp
public string[] ObjectKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_keys DataintegrationWorkspaceApplicationPatch#object_keys}.

---

##### `ObjectStatus`<sup>Optional</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.objectStatus"></a>

```csharp
public double ObjectStatus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_status DataintegrationWorkspaceApplicationPatch#object_status}.

---

##### `RegistryMetadata`<sup>Optional</sup> <a name="RegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.registryMetadata"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchRegistryMetadata RegistryMetadata { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#registry_metadata DataintegrationWorkspaceApplicationPatch#registry_metadata}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.timeouts"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#timeouts DataintegrationWorkspaceApplicationPatch#timeouts}

---

### DataintegrationWorkspaceApplicationPatchDependentObjectMetadata <a name="DataintegrationWorkspaceApplicationPatchDependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchDependentObjectMetadata {

};
```


### DataintegrationWorkspaceApplicationPatchMetadata <a name="DataintegrationWorkspaceApplicationPatchMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadata {

};
```


### DataintegrationWorkspaceApplicationPatchMetadataAggregator <a name="DataintegrationWorkspaceApplicationPatchMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataAggregator {

};
```


### DataintegrationWorkspaceApplicationPatchMetadataCountStatistics <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataCountStatistics {

};
```


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct {

};
```


### DataintegrationWorkspaceApplicationPatchParentRef <a name="DataintegrationWorkspaceApplicationPatchParentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchParentRef {

};
```


### DataintegrationWorkspaceApplicationPatchPatchObjectMetadata <a name="DataintegrationWorkspaceApplicationPatchPatchObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchPatchObjectMetadata {

};
```


### DataintegrationWorkspaceApplicationPatchRegistryMetadata <a name="DataintegrationWorkspaceApplicationPatchRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchRegistryMetadata {
    string AggregatorKey = null,
    object IsFavorite = null,
    string Key = null,
    string[] Labels = null,
    double RegistryVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.aggregatorKey">AggregatorKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#aggregator_key DataintegrationWorkspaceApplicationPatch#aggregator_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.isFavorite">IsFavorite</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#is_favorite DataintegrationWorkspaceApplicationPatch#is_favorite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.labels">Labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#labels DataintegrationWorkspaceApplicationPatch#labels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.registryVersion">RegistryVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#registry_version DataintegrationWorkspaceApplicationPatch#registry_version}. |

---

##### `AggregatorKey`<sup>Optional</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.aggregatorKey"></a>

```csharp
public string AggregatorKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#aggregator_key DataintegrationWorkspaceApplicationPatch#aggregator_key}.

---

##### `IsFavorite`<sup>Optional</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.isFavorite"></a>

```csharp
public object IsFavorite { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#is_favorite DataintegrationWorkspaceApplicationPatch#is_favorite}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#labels DataintegrationWorkspaceApplicationPatch#labels}.

---

##### `RegistryVersion`<sup>Optional</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.registryVersion"></a>

```csharp
public double RegistryVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#registry_version DataintegrationWorkspaceApplicationPatch#registry_version}.

---

### DataintegrationWorkspaceApplicationPatchTimeouts <a name="DataintegrationWorkspaceApplicationPatchTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#create DataintegrationWorkspaceApplicationPatch#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#delete DataintegrationWorkspaceApplicationPatch#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#update DataintegrationWorkspaceApplicationPatch#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#create DataintegrationWorkspaceApplicationPatch#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#delete DataintegrationWorkspaceApplicationPatch#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#update DataintegrationWorkspaceApplicationPatch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList <a name="DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference <a name="DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.namePath">NamePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadata">DataintegrationWorkspaceApplicationPatchDependentObjectMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.namePath"></a>

```csharp
public string NamePath { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.objectVersion"></a>

```csharp
public double ObjectVersion { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchDependentObjectMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadata">DataintegrationWorkspaceApplicationPatchDependentObjectMetadata</a>

---


### DataintegrationWorkspaceApplicationPatchMetadataAggregatorList <a name="DataintegrationWorkspaceApplicationPatchMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataAggregatorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference <a name="DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregator">DataintegrationWorkspaceApplicationPatchMetadataAggregator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchMetadataAggregator InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregator">DataintegrationWorkspaceApplicationPatchMetadataAggregator</a>

---


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">ObjectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```csharp
public string ObjectCount { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.objectTypeCountList">ObjectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatistics">DataintegrationWorkspaceApplicationPatchMetadataCountStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectTypeCountList`<sup>Required</sup> <a name="ObjectTypeCountList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList ObjectTypeCountList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchMetadataCountStatistics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatistics">DataintegrationWorkspaceApplicationPatchMetadataCountStatistics</a>

---


### DataintegrationWorkspaceApplicationPatchMetadataList <a name="DataintegrationWorkspaceApplicationPatchMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationPatchMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationPatchMetadataOutputReference <a name="DataintegrationWorkspaceApplicationPatchMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.aggregator">Aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList">DataintegrationWorkspaceApplicationPatchMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.countStatistics">CountStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.createdByName">CreatedByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.identifierPath">IdentifierPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.infoFields">InfoFields</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.updatedByName">UpdatedByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadata">DataintegrationWorkspaceApplicationPatchMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregator`<sup>Required</sup> <a name="Aggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.aggregator"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchMetadataAggregatorList Aggregator { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList">DataintegrationWorkspaceApplicationPatchMetadataAggregatorList</a>

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.aggregatorKey"></a>

```csharp
public string AggregatorKey { get; }
```

- *Type:* string

---

##### `CountStatistics`<sup>Required</sup> <a name="CountStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.countStatistics"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList CountStatistics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreatedByName`<sup>Required</sup> <a name="CreatedByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.createdByName"></a>

```csharp
public string CreatedByName { get; }
```

- *Type:* string

---

##### `IdentifierPath`<sup>Required</sup> <a name="IdentifierPath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.identifierPath"></a>

```csharp
public string IdentifierPath { get; }
```

- *Type:* string

---

##### `InfoFields`<sup>Required</sup> <a name="InfoFields" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.infoFields"></a>

```csharp
public StringMap InfoFields { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.isFavorite"></a>

```csharp
public IResolvable IsFavorite { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.registryVersion"></a>

```csharp
public double RegistryVersion { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `UpdatedByName`<sup>Required</sup> <a name="UpdatedByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.updatedByName"></a>

```csharp
public string UpdatedByName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadata">DataintegrationWorkspaceApplicationPatchMetadata</a>

---


### DataintegrationWorkspaceApplicationPatchParentRefList <a name="DataintegrationWorkspaceApplicationPatchParentRefList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchParentRefList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationPatchParentRefOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationPatchParentRefOutputReference <a name="DataintegrationWorkspaceApplicationPatchParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchParentRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.rootDocId">RootDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRef">DataintegrationWorkspaceApplicationPatchParentRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `RootDocId`<sup>Required</sup> <a name="RootDocId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.rootDocId"></a>

```csharp
public string RootDocId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchParentRef InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRef">DataintegrationWorkspaceApplicationPatchParentRef</a>

---


### DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList <a name="DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference <a name="DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.namePath">NamePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadata">DataintegrationWorkspaceApplicationPatchPatchObjectMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.namePath"></a>

```csharp
public string NamePath { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.objectVersion"></a>

```csharp
public double ObjectVersion { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchPatchObjectMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadata">DataintegrationWorkspaceApplicationPatchPatchObjectMetadata</a>

---


### DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference <a name="DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetAggregatorKey">ResetAggregatorKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetIsFavorite">ResetIsFavorite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetRegistryVersion">ResetRegistryVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregatorKey` <a name="ResetAggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetAggregatorKey"></a>

```csharp
private void ResetAggregatorKey()
```

##### `ResetIsFavorite` <a name="ResetIsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetIsFavorite"></a>

```csharp
private void ResetIsFavorite()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetLabels` <a name="ResetLabels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetRegistryVersion` <a name="ResetRegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetRegistryVersion"></a>

```csharp
private void ResetRegistryVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.aggregatorKeyInput">AggregatorKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.isFavoriteInput">IsFavoriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.registryVersionInput">RegistryVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregatorKeyInput`<sup>Optional</sup> <a name="AggregatorKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.aggregatorKeyInput"></a>

```csharp
public string AggregatorKeyInput { get; }
```

- *Type:* string

---

##### `IsFavoriteInput`<sup>Optional</sup> <a name="IsFavoriteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.isFavoriteInput"></a>

```csharp
public object IsFavoriteInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `RegistryVersionInput`<sup>Optional</sup> <a name="RegistryVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.registryVersionInput"></a>

```csharp
public double RegistryVersionInput { get; }
```

- *Type:* double

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.aggregatorKey"></a>

```csharp
public string AggregatorKey { get; }
```

- *Type:* string

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.isFavorite"></a>

```csharp
public object IsFavorite { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.registryVersion"></a>

```csharp
public double RegistryVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationPatchRegistryMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a>

---


### DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference <a name="DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



