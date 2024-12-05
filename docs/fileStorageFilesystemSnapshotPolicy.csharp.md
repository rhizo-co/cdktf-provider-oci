# `fileStorageFilesystemSnapshotPolicy` Submodule <a name="`fileStorageFilesystemSnapshotPolicy` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageFilesystemSnapshotPolicy <a name="FileStorageFilesystemSnapshotPolicy" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicy(Construct Scope, string Id, FileStorageFilesystemSnapshotPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig">FileStorageFilesystemSnapshotPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig">FileStorageFilesystemSnapshotPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules">PutSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetPolicyPrefix">ResetPolicyPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetSchedules">ResetSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutSchedules` <a name="PutSchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules"></a>

```csharp
private void PutSchedules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(FileStorageFilesystemSnapshotPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetIsLockOverride"></a>

```csharp
private void ResetIsLockOverride()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetPolicyPrefix` <a name="ResetPolicyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetPolicyPrefix"></a>

```csharp
private void ResetPolicyPrefix()
```

##### `ResetSchedules` <a name="ResetSchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetSchedules"></a>

```csharp
private void ResetSchedules()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageFilesystemSnapshotPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageFilesystemSnapshotPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageFilesystemSnapshotPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageFilesystemSnapshotPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FileStorageFilesystemSnapshotPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FileStorageFilesystemSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageFilesystemSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList">FileStorageFilesystemSnapshotPolicyLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedules">Schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList">FileStorageFilesystemSnapshotPolicySchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference">FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefixInput">PolicyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedulesInput">SchedulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefix">PolicyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locks"></a>

```csharp
public FileStorageFilesystemSnapshotPolicyLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList">FileStorageFilesystemSnapshotPolicyLocksList</a>

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedules"></a>

```csharp
public FileStorageFilesystemSnapshotPolicySchedulesList Schedules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList">FileStorageFilesystemSnapshotPolicySchedulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeouts"></a>

```csharp
public FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference">FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverrideInput"></a>

```csharp
public object IsLockOverrideInput { get; }
```

- *Type:* object

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `PolicyPrefixInput`<sup>Optional</sup> <a name="PolicyPrefixInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefixInput"></a>

```csharp
public string PolicyPrefixInput { get; }
```

- *Type:* string

---

##### `SchedulesInput`<sup>Optional</sup> <a name="SchedulesInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedulesInput"></a>

```csharp
public object SchedulesInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; }
```

- *Type:* object

---

##### `PolicyPrefix`<sup>Required</sup> <a name="PolicyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefix"></a>

```csharp
public string PolicyPrefix { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageFilesystemSnapshotPolicyConfig <a name="FileStorageFilesystemSnapshotPolicyConfig" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsLockOverride = null,
    object Locks = null,
    string PolicyPrefix = null,
    object Schedules = null,
    string State = null,
    FileStorageFilesystemSnapshotPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.policyPrefix">PolicyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.schedules">Schedules</a></code> | <code>object</code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#locks FileStorageFilesystemSnapshotPolicy#locks}

---

##### `PolicyPrefix`<sup>Optional</sup> <a name="PolicyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.policyPrefix"></a>

```csharp
public string PolicyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}.

---

##### `Schedules`<sup>Optional</sup> <a name="Schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.schedules"></a>

```csharp
public object Schedules { get; set; }
```

- *Type:* object

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedules FileStorageFilesystemSnapshotPolicy#schedules}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.timeouts"></a>

```csharp
public FileStorageFilesystemSnapshotPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#timeouts FileStorageFilesystemSnapshotPolicy#timeouts}

---

### FileStorageFilesystemSnapshotPolicyLocks <a name="FileStorageFilesystemSnapshotPolicyLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicyLocks {
    string Type,
    string Message = null,
    string RelatedResourceId = null,
    string TimeCreated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#type FileStorageFilesystemSnapshotPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#message FileStorageFilesystemSnapshotPolicy#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#related_resource_id FileStorageFilesystemSnapshotPolicy#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_created FileStorageFilesystemSnapshotPolicy#time_created}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#type FileStorageFilesystemSnapshotPolicy#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#message FileStorageFilesystemSnapshotPolicy#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#related_resource_id FileStorageFilesystemSnapshotPolicy#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_created FileStorageFilesystemSnapshotPolicy#time_created}.

---

### FileStorageFilesystemSnapshotPolicySchedules <a name="FileStorageFilesystemSnapshotPolicySchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicySchedules {
    string Period,
    string TimeZone,
    double DayOfMonth = null,
    string DayOfWeek = null,
    double HourOfDay = null,
    string Month = null,
    string RetentionDurationInSeconds = null,
    string SchedulePrefix = null,
    string TimeScheduleStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.period">Period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#period FileStorageFilesystemSnapshotPolicy#period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_zone FileStorageFilesystemSnapshotPolicy#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_month FileStorageFilesystemSnapshotPolicy#day_of_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_week FileStorageFilesystemSnapshotPolicy#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#hour_of_day FileStorageFilesystemSnapshotPolicy#hour_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.month">Month</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#month FileStorageFilesystemSnapshotPolicy#month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.retentionDurationInSeconds">RetentionDurationInSeconds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#retention_duration_in_seconds FileStorageFilesystemSnapshotPolicy#retention_duration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.schedulePrefix">SchedulePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedule_prefix FileStorageFilesystemSnapshotPolicy#schedule_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_schedule_start FileStorageFilesystemSnapshotPolicy#time_schedule_start}. |

---

##### `Period`<sup>Required</sup> <a name="Period" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#period FileStorageFilesystemSnapshotPolicy#period}.

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_zone FileStorageFilesystemSnapshotPolicy#time_zone}.

---

##### `DayOfMonth`<sup>Optional</sup> <a name="DayOfMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_month FileStorageFilesystemSnapshotPolicy#day_of_month}.

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_week FileStorageFilesystemSnapshotPolicy#day_of_week}.

---

##### `HourOfDay`<sup>Optional</sup> <a name="HourOfDay" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#hour_of_day FileStorageFilesystemSnapshotPolicy#hour_of_day}.

---

##### `Month`<sup>Optional</sup> <a name="Month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.month"></a>

```csharp
public string Month { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#month FileStorageFilesystemSnapshotPolicy#month}.

---

##### `RetentionDurationInSeconds`<sup>Optional</sup> <a name="RetentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.retentionDurationInSeconds"></a>

```csharp
public string RetentionDurationInSeconds { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#retention_duration_in_seconds FileStorageFilesystemSnapshotPolicy#retention_duration_in_seconds}.

---

##### `SchedulePrefix`<sup>Optional</sup> <a name="SchedulePrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.schedulePrefix"></a>

```csharp
public string SchedulePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedule_prefix FileStorageFilesystemSnapshotPolicy#schedule_prefix}.

---

##### `TimeScheduleStart`<sup>Optional</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeScheduleStart"></a>

```csharp
public string TimeScheduleStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_schedule_start FileStorageFilesystemSnapshotPolicy#time_schedule_start}.

---

### FileStorageFilesystemSnapshotPolicyTimeouts <a name="FileStorageFilesystemSnapshotPolicyTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageFilesystemSnapshotPolicyLocksList <a name="FileStorageFilesystemSnapshotPolicyLocksList" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicyLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get"></a>

```csharp
private FileStorageFilesystemSnapshotPolicyLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageFilesystemSnapshotPolicyLocksOutputReference <a name="FileStorageFilesystemSnapshotPolicyLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicyLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetRelatedResourceId"></a>

```csharp
private void ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceIdInput"></a>

```csharp
public string RelatedResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageFilesystemSnapshotPolicySchedulesList <a name="FileStorageFilesystemSnapshotPolicySchedulesList" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicySchedulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get"></a>

```csharp
private FileStorageFilesystemSnapshotPolicySchedulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageFilesystemSnapshotPolicySchedulesOutputReference <a name="FileStorageFilesystemSnapshotPolicySchedulesOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicySchedulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfMonth">ResetDayOfMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetHourOfDay">ResetHourOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetRetentionDurationInSeconds">ResetRetentionDurationInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetSchedulePrefix">ResetSchedulePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetTimeScheduleStart">ResetTimeScheduleStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOfMonth` <a name="ResetDayOfMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfMonth"></a>

```csharp
private void ResetDayOfMonth()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetHourOfDay` <a name="ResetHourOfDay" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetHourOfDay"></a>

```csharp
private void ResetHourOfDay()
```

##### `ResetMonth` <a name="ResetMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetRetentionDurationInSeconds` <a name="ResetRetentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetRetentionDurationInSeconds"></a>

```csharp
private void ResetRetentionDurationInSeconds()
```

##### `ResetSchedulePrefix` <a name="ResetSchedulePrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetSchedulePrefix"></a>

```csharp
private void ResetSchedulePrefix()
```

##### `ResetTimeScheduleStart` <a name="ResetTimeScheduleStart" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetTimeScheduleStart"></a>

```csharp
private void ResetTimeScheduleStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonthInput">DayOfMonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.monthInput">MonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSecondsInput">RetentionDurationInSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefixInput">SchedulePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStartInput">TimeScheduleStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month">Month</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds">RetentionDurationInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix">SchedulePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfMonthInput`<sup>Optional</sup> <a name="DayOfMonthInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonthInput"></a>

```csharp
public double DayOfMonthInput { get; }
```

- *Type:* double

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.monthInput"></a>

```csharp
public string MonthInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `RetentionDurationInSecondsInput`<sup>Optional</sup> <a name="RetentionDurationInSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSecondsInput"></a>

```csharp
public string RetentionDurationInSecondsInput { get; }
```

- *Type:* string

---

##### `SchedulePrefixInput`<sup>Optional</sup> <a name="SchedulePrefixInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefixInput"></a>

```csharp
public string SchedulePrefixInput { get; }
```

- *Type:* string

---

##### `TimeScheduleStartInput`<sup>Optional</sup> <a name="TimeScheduleStartInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStartInput"></a>

```csharp
public string TimeScheduleStartInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; }
```

- *Type:* double

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month"></a>

```csharp
public string Month { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `RetentionDurationInSeconds`<sup>Required</sup> <a name="RetentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds"></a>

```csharp
public string RetentionDurationInSeconds { get; }
```

- *Type:* string

---

##### `SchedulePrefix`<sup>Required</sup> <a name="SchedulePrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix"></a>

```csharp
public string SchedulePrefix { get; }
```

- *Type:* string

---

##### `TimeScheduleStart`<sup>Required</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart"></a>

```csharp
public string TimeScheduleStart { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference <a name="FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



