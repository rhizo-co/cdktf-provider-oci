# `fileStorageMountTarget` Submodule <a name="`fileStorageMountTarget` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageMountTarget <a name="FileStorageMountTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target oci_file_storage_mount_target}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTarget(Construct Scope, string Id, FileStorageMountTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig">FileStorageMountTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig">FileStorageMountTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos">PutKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap">PutLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType">ResetIdmapType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos">ResetKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap">ResetLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput">ResetRequestedThroughput</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKerberos` <a name="PutKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos"></a>

```csharp
private void PutKerberos(FileStorageMountTargetKerberos Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---

##### `PutLdapIdmap` <a name="PutLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap"></a>

```csharp
private void PutLdapIdmap(FileStorageMountTargetLdapIdmap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts"></a>

```csharp
private void PutTimeouts(FileStorageMountTargetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel"></a>

```csharp
private void ResetHostnameLabel()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdmapType` <a name="ResetIdmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType"></a>

```csharp
private void ResetIdmapType()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride"></a>

```csharp
private void ResetIsLockOverride()
```

##### `ResetKerberos` <a name="ResetKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos"></a>

```csharp
private void ResetKerberos()
```

##### `ResetLdapIdmap` <a name="ResetLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap"></a>

```csharp
private void ResetLdapIdmap()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetRequestedThroughput` <a name="ResetRequestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput"></a>

```csharp
private void ResetRequestedThroughput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageMountTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageMountTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageMountTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageMountTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FileStorageMountTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FileStorageMountTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageMountTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId">ExportSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos">Kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap">LdapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput">ObservedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds">PrivateIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity">ReservedStorageCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd">TimeBillingCycleEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput">IdmapTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput">KerberosInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput">LdapIdmapInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput">RequestedThroughputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType">IdmapType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput">RequestedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExportSetId`<sup>Required</sup> <a name="ExportSetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId"></a>

```csharp
public string ExportSetId { get; }
```

- *Type:* string

---

##### `Kerberos`<sup>Required</sup> <a name="Kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos"></a>

```csharp
public FileStorageMountTargetKerberosOutputReference Kerberos { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a>

---

##### `LdapIdmap`<sup>Required</sup> <a name="LdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap"></a>

```csharp
public FileStorageMountTargetLdapIdmapOutputReference LdapIdmap { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks"></a>

```csharp
public FileStorageMountTargetLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a>

---

##### `ObservedThroughput`<sup>Required</sup> <a name="ObservedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput"></a>

```csharp
public string ObservedThroughput { get; }
```

- *Type:* string

---

##### `PrivateIpIds`<sup>Required</sup> <a name="PrivateIpIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds"></a>

```csharp
public string[] PrivateIpIds { get; }
```

- *Type:* string[]

---

##### `ReservedStorageCapacity`<sup>Required</sup> <a name="ReservedStorageCapacity" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity"></a>

```csharp
public string ReservedStorageCapacity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeBillingCycleEnd`<sup>Required</sup> <a name="TimeBillingCycleEnd" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd"></a>

```csharp
public string TimeBillingCycleEnd { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts"></a>

```csharp
public FileStorageMountTargetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput"></a>

```csharp
public string HostnameLabelInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdmapTypeInput`<sup>Optional</sup> <a name="IdmapTypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput"></a>

```csharp
public string IdmapTypeInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput"></a>

```csharp
public object IsLockOverrideInput { get; }
```

- *Type:* object

---

##### `KerberosInput`<sup>Optional</sup> <a name="KerberosInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput"></a>

```csharp
public FileStorageMountTargetKerberos KerberosInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---

##### `LdapIdmapInput`<sup>Optional</sup> <a name="LdapIdmapInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput"></a>

```csharp
public FileStorageMountTargetLdapIdmap LdapIdmapInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `RequestedThroughputInput`<sup>Optional</sup> <a name="RequestedThroughputInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput"></a>

```csharp
public string RequestedThroughputInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdmapType`<sup>Required</sup> <a name="IdmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType"></a>

```csharp
public string IdmapType { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; }
```

- *Type:* object

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `RequestedThroughput`<sup>Required</sup> <a name="RequestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput"></a>

```csharp
public string RequestedThroughput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageMountTargetConfig <a name="FileStorageMountTargetConfig" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    string SubnetId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string HostnameLabel = null,
    string Id = null,
    string IdmapType = null,
    string IpAddress = null,
    object IsLockOverride = null,
    FileStorageMountTargetKerberos Kerberos = null,
    FileStorageMountTargetLdapIdmap LdapIdmap = null,
    object Locks = null,
    string[] NsgIds = null,
    string RequestedThroughput = null,
    FileStorageMountTargetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType">IdmapType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos">Kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | kerberos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap">LdapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | ldap_idmap block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput">RequestedThroughput</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdmapType`<sup>Optional</sup> <a name="IdmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType"></a>

```csharp
public string IdmapType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}.

---

##### `Kerberos`<sup>Optional</sup> <a name="Kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos"></a>

```csharp
public FileStorageMountTargetKerberos Kerberos { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos FileStorageMountTarget#kerberos}

---

##### `LdapIdmap`<sup>Optional</sup> <a name="LdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap"></a>

```csharp
public FileStorageMountTargetLdapIdmap LdapIdmap { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

ldap_idmap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ldap_idmap FileStorageMountTarget#ldap_idmap}

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#locks FileStorageMountTarget#locks}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}.

---

##### `RequestedThroughput`<sup>Optional</sup> <a name="RequestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput"></a>

```csharp
public string RequestedThroughput { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts"></a>

```csharp
public FileStorageMountTargetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#timeouts FileStorageMountTarget#timeouts}

---

### FileStorageMountTargetKerberos <a name="FileStorageMountTargetKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetKerberos {
    string KerberosRealm,
    double BackupKeyTabSecretVersion = null,
    double CurrentKeyTabSecretVersion = null,
    object IsKerberosEnabled = null,
    string KeyTabSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm">KerberosRealm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion">BackupKeyTabSecretVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion">CurrentKeyTabSecretVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled">IsKerberosEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId">KeyTabSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}. |

---

##### `KerberosRealm`<sup>Required</sup> <a name="KerberosRealm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm"></a>

```csharp
public string KerberosRealm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}.

---

##### `BackupKeyTabSecretVersion`<sup>Optional</sup> <a name="BackupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion"></a>

```csharp
public double BackupKeyTabSecretVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}.

---

##### `CurrentKeyTabSecretVersion`<sup>Optional</sup> <a name="CurrentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion"></a>

```csharp
public double CurrentKeyTabSecretVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}.

---

##### `IsKerberosEnabled`<sup>Optional</sup> <a name="IsKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled"></a>

```csharp
public object IsKerberosEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}.

---

##### `KeyTabSecretId`<sup>Optional</sup> <a name="KeyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId"></a>

```csharp
public string KeyTabSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}.

---

### FileStorageMountTargetLdapIdmap <a name="FileStorageMountTargetLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetLdapIdmap {
    double CacheLifetimeSeconds = null,
    double CacheRefreshIntervalSeconds = null,
    string GroupSearchBase = null,
    double NegativeCacheLifetimeSeconds = null,
    string OutboundConnector1Id = null,
    string OutboundConnector2Id = null,
    string SchemaType = null,
    string UserSearchBase = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds">CacheLifetimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds">CacheRefreshIntervalSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase">GroupSearchBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds">NegativeCacheLifetimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id">OutboundConnector1Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id">OutboundConnector2Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType">SchemaType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase">UserSearchBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}. |

---

##### `CacheLifetimeSeconds`<sup>Optional</sup> <a name="CacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds"></a>

```csharp
public double CacheLifetimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}.

---

##### `CacheRefreshIntervalSeconds`<sup>Optional</sup> <a name="CacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds"></a>

```csharp
public double CacheRefreshIntervalSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}.

---

##### `GroupSearchBase`<sup>Optional</sup> <a name="GroupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase"></a>

```csharp
public string GroupSearchBase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}.

---

##### `NegativeCacheLifetimeSeconds`<sup>Optional</sup> <a name="NegativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds"></a>

```csharp
public double NegativeCacheLifetimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}.

---

##### `OutboundConnector1Id`<sup>Optional</sup> <a name="OutboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id"></a>

```csharp
public string OutboundConnector1Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}.

---

##### `OutboundConnector2Id`<sup>Optional</sup> <a name="OutboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id"></a>

```csharp
public string OutboundConnector2Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}.

---

##### `SchemaType`<sup>Optional</sup> <a name="SchemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType"></a>

```csharp
public string SchemaType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}.

---

##### `UserSearchBase`<sup>Optional</sup> <a name="UserSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase"></a>

```csharp
public string UserSearchBase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}.

---

### FileStorageMountTargetLocks <a name="FileStorageMountTargetLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetLocks {
    string Type,
    string Message = null,
    string RelatedResourceId = null,
    string TimeCreated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}.

---

### FileStorageMountTargetTimeouts <a name="FileStorageMountTargetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageMountTargetKerberosOutputReference <a name="FileStorageMountTargetKerberosOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetKerberosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion">ResetBackupKeyTabSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion">ResetCurrentKeyTabSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled">ResetIsKerberosEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId">ResetKeyTabSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupKeyTabSecretVersion` <a name="ResetBackupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion"></a>

```csharp
private void ResetBackupKeyTabSecretVersion()
```

##### `ResetCurrentKeyTabSecretVersion` <a name="ResetCurrentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion"></a>

```csharp
private void ResetCurrentKeyTabSecretVersion()
```

##### `ResetIsKerberosEnabled` <a name="ResetIsKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled"></a>

```csharp
private void ResetIsKerberosEnabled()
```

##### `ResetKeyTabSecretId` <a name="ResetKeyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId"></a>

```csharp
private void ResetKeyTabSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput">BackupKeyTabSecretVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput">CurrentKeyTabSecretVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput">IsKerberosEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput">KerberosRealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput">KeyTabSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion">BackupKeyTabSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion">CurrentKeyTabSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled">IsKerberosEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm">KerberosRealm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId">KeyTabSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupKeyTabSecretVersionInput`<sup>Optional</sup> <a name="BackupKeyTabSecretVersionInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput"></a>

```csharp
public double BackupKeyTabSecretVersionInput { get; }
```

- *Type:* double

---

##### `CurrentKeyTabSecretVersionInput`<sup>Optional</sup> <a name="CurrentKeyTabSecretVersionInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput"></a>

```csharp
public double CurrentKeyTabSecretVersionInput { get; }
```

- *Type:* double

---

##### `IsKerberosEnabledInput`<sup>Optional</sup> <a name="IsKerberosEnabledInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput"></a>

```csharp
public object IsKerberosEnabledInput { get; }
```

- *Type:* object

---

##### `KerberosRealmInput`<sup>Optional</sup> <a name="KerberosRealmInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput"></a>

```csharp
public string KerberosRealmInput { get; }
```

- *Type:* string

---

##### `KeyTabSecretIdInput`<sup>Optional</sup> <a name="KeyTabSecretIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput"></a>

```csharp
public string KeyTabSecretIdInput { get; }
```

- *Type:* string

---

##### `BackupKeyTabSecretVersion`<sup>Required</sup> <a name="BackupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion"></a>

```csharp
public double BackupKeyTabSecretVersion { get; }
```

- *Type:* double

---

##### `CurrentKeyTabSecretVersion`<sup>Required</sup> <a name="CurrentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion"></a>

```csharp
public double CurrentKeyTabSecretVersion { get; }
```

- *Type:* double

---

##### `IsKerberosEnabled`<sup>Required</sup> <a name="IsKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled"></a>

```csharp
public object IsKerberosEnabled { get; }
```

- *Type:* object

---

##### `KerberosRealm`<sup>Required</sup> <a name="KerberosRealm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm"></a>

```csharp
public string KerberosRealm { get; }
```

- *Type:* string

---

##### `KeyTabSecretId`<sup>Required</sup> <a name="KeyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId"></a>

```csharp
public string KeyTabSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue"></a>

```csharp
public FileStorageMountTargetKerberos InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---


### FileStorageMountTargetLdapIdmapOutputReference <a name="FileStorageMountTargetLdapIdmapOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetLdapIdmapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds">ResetCacheLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds">ResetCacheRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase">ResetGroupSearchBase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds">ResetNegativeCacheLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id">ResetOutboundConnector1Id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id">ResetOutboundConnector2Id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType">ResetSchemaType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase">ResetUserSearchBase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheLifetimeSeconds` <a name="ResetCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds"></a>

```csharp
private void ResetCacheLifetimeSeconds()
```

##### `ResetCacheRefreshIntervalSeconds` <a name="ResetCacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds"></a>

```csharp
private void ResetCacheRefreshIntervalSeconds()
```

##### `ResetGroupSearchBase` <a name="ResetGroupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase"></a>

```csharp
private void ResetGroupSearchBase()
```

##### `ResetNegativeCacheLifetimeSeconds` <a name="ResetNegativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds"></a>

```csharp
private void ResetNegativeCacheLifetimeSeconds()
```

##### `ResetOutboundConnector1Id` <a name="ResetOutboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id"></a>

```csharp
private void ResetOutboundConnector1Id()
```

##### `ResetOutboundConnector2Id` <a name="ResetOutboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id"></a>

```csharp
private void ResetOutboundConnector2Id()
```

##### `ResetSchemaType` <a name="ResetSchemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType"></a>

```csharp
private void ResetSchemaType()
```

##### `ResetUserSearchBase` <a name="ResetUserSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase"></a>

```csharp
private void ResetUserSearchBase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput">CacheLifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput">CacheRefreshIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput">GroupSearchBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput">NegativeCacheLifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput">OutboundConnector1IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput">OutboundConnector2IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput">SchemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput">UserSearchBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds">CacheLifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds">CacheRefreshIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase">GroupSearchBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds">NegativeCacheLifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id">OutboundConnector1Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id">OutboundConnector2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType">SchemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase">UserSearchBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheLifetimeSecondsInput`<sup>Optional</sup> <a name="CacheLifetimeSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput"></a>

```csharp
public double CacheLifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `CacheRefreshIntervalSecondsInput`<sup>Optional</sup> <a name="CacheRefreshIntervalSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput"></a>

```csharp
public double CacheRefreshIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `GroupSearchBaseInput`<sup>Optional</sup> <a name="GroupSearchBaseInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput"></a>

```csharp
public string GroupSearchBaseInput { get; }
```

- *Type:* string

---

##### `NegativeCacheLifetimeSecondsInput`<sup>Optional</sup> <a name="NegativeCacheLifetimeSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput"></a>

```csharp
public double NegativeCacheLifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `OutboundConnector1IdInput`<sup>Optional</sup> <a name="OutboundConnector1IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput"></a>

```csharp
public string OutboundConnector1IdInput { get; }
```

- *Type:* string

---

##### `OutboundConnector2IdInput`<sup>Optional</sup> <a name="OutboundConnector2IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput"></a>

```csharp
public string OutboundConnector2IdInput { get; }
```

- *Type:* string

---

##### `SchemaTypeInput`<sup>Optional</sup> <a name="SchemaTypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput"></a>

```csharp
public string SchemaTypeInput { get; }
```

- *Type:* string

---

##### `UserSearchBaseInput`<sup>Optional</sup> <a name="UserSearchBaseInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput"></a>

```csharp
public string UserSearchBaseInput { get; }
```

- *Type:* string

---

##### `CacheLifetimeSeconds`<sup>Required</sup> <a name="CacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds"></a>

```csharp
public double CacheLifetimeSeconds { get; }
```

- *Type:* double

---

##### `CacheRefreshIntervalSeconds`<sup>Required</sup> <a name="CacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds"></a>

```csharp
public double CacheRefreshIntervalSeconds { get; }
```

- *Type:* double

---

##### `GroupSearchBase`<sup>Required</sup> <a name="GroupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase"></a>

```csharp
public string GroupSearchBase { get; }
```

- *Type:* string

---

##### `NegativeCacheLifetimeSeconds`<sup>Required</sup> <a name="NegativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds"></a>

```csharp
public double NegativeCacheLifetimeSeconds { get; }
```

- *Type:* double

---

##### `OutboundConnector1Id`<sup>Required</sup> <a name="OutboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id"></a>

```csharp
public string OutboundConnector1Id { get; }
```

- *Type:* string

---

##### `OutboundConnector2Id`<sup>Required</sup> <a name="OutboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id"></a>

```csharp
public string OutboundConnector2Id { get; }
```

- *Type:* string

---

##### `SchemaType`<sup>Required</sup> <a name="SchemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType"></a>

```csharp
public string SchemaType { get; }
```

- *Type:* string

---

##### `UserSearchBase`<sup>Required</sup> <a name="UserSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase"></a>

```csharp
public string UserSearchBase { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue"></a>

```csharp
public FileStorageMountTargetLdapIdmap InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---


### FileStorageMountTargetLocksList <a name="FileStorageMountTargetLocksList" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get"></a>

```csharp
private FileStorageMountTargetLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageMountTargetLocksOutputReference <a name="FileStorageMountTargetLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId"></a>

```csharp
private void ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput"></a>

```csharp
public string RelatedResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageMountTargetTimeoutsOutputReference <a name="FileStorageMountTargetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageMountTargetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



