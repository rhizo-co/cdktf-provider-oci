# `fileStorageOutboundConnector` Submodule <a name="`fileStorageOutboundConnector` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageOutboundConnector <a name="FileStorageOutboundConnector" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector oci_file_storage_outbound_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnector(Construct Scope, string Id, FileStorageOutboundConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig">FileStorageOutboundConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig">FileStorageOutboundConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetPasswordSecretVersion">ResetPasswordSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.putEndpoints"></a>

```csharp
private void PutEndpoints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.putEndpoints.parameter.value"></a>

- *Type:* object

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.putTimeouts"></a>

```csharp
private void PutTimeouts(FileStorageOutboundConnectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts">FileStorageOutboundConnectorTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetIsLockOverride"></a>

```csharp
private void ResetIsLockOverride()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetPasswordSecretId"></a>

```csharp
private void ResetPasswordSecretId()
```

##### `ResetPasswordSecretVersion` <a name="ResetPasswordSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetPasswordSecretVersion"></a>

```csharp
private void ResetPasswordSecretVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FileStorageOutboundConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageOutboundConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageOutboundConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageOutboundConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FileStorageOutboundConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FileStorageOutboundConnector resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FileStorageOutboundConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FileStorageOutboundConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageOutboundConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.endpoints">Endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList">FileStorageOutboundConnectorEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList">FileStorageOutboundConnectorLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference">FileStorageOutboundConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.bindDistinguishedNameInput">BindDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.endpointsInput">EndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.passwordSecretVersionInput">PasswordSecretVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.bindDistinguishedName">BindDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.passwordSecretVersion">PasswordSecretVersion</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.endpoints"></a>

```csharp
public FileStorageOutboundConnectorEndpointsList Endpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList">FileStorageOutboundConnectorEndpointsList</a>

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.locks"></a>

```csharp
public FileStorageOutboundConnectorLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList">FileStorageOutboundConnectorLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.timeouts"></a>

```csharp
public FileStorageOutboundConnectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference">FileStorageOutboundConnectorTimeoutsOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `BindDistinguishedNameInput`<sup>Optional</sup> <a name="BindDistinguishedNameInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.bindDistinguishedNameInput"></a>

```csharp
public string BindDistinguishedNameInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.connectorTypeInput"></a>

```csharp
public string ConnectorTypeInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.endpointsInput"></a>

```csharp
public object EndpointsInput { get; }
```

- *Type:* object

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.isLockOverrideInput"></a>

```csharp
public object IsLockOverrideInput { get; }
```

- *Type:* object

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.passwordSecretIdInput"></a>

```csharp
public string PasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `PasswordSecretVersionInput`<sup>Optional</sup> <a name="PasswordSecretVersionInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.passwordSecretVersionInput"></a>

```csharp
public double PasswordSecretVersionInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BindDistinguishedName`<sup>Required</sup> <a name="BindDistinguishedName" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.bindDistinguishedName"></a>

```csharp
public string BindDistinguishedName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; }
```

- *Type:* object

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `PasswordSecretVersion`<sup>Required</sup> <a name="PasswordSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.passwordSecretVersion"></a>

```csharp
public double PasswordSecretVersion { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageOutboundConnectorConfig <a name="FileStorageOutboundConnectorConfig" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnectorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string BindDistinguishedName,
    string CompartmentId,
    string ConnectorType,
    object Endpoints,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsLockOverride = null,
    object Locks = null,
    string PasswordSecretId = null,
    double PasswordSecretVersion = null,
    FileStorageOutboundConnectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#availability_domain FileStorageOutboundConnector#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.bindDistinguishedName">BindDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#bind_distinguished_name FileStorageOutboundConnector#bind_distinguished_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#compartment_id FileStorageOutboundConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.connectorType">ConnectorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#connector_type FileStorageOutboundConnector#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.endpoints">Endpoints</a></code> | <code>object</code> | endpoints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#defined_tags FileStorageOutboundConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#display_name FileStorageOutboundConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#freeform_tags FileStorageOutboundConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#id FileStorageOutboundConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#is_lock_override FileStorageOutboundConnector#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#password_secret_id FileStorageOutboundConnector#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.passwordSecretVersion">PasswordSecretVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#password_secret_version FileStorageOutboundConnector#password_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts">FileStorageOutboundConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#availability_domain FileStorageOutboundConnector#availability_domain}.

---

##### `BindDistinguishedName`<sup>Required</sup> <a name="BindDistinguishedName" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.bindDistinguishedName"></a>

```csharp
public string BindDistinguishedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#bind_distinguished_name FileStorageOutboundConnector#bind_distinguished_name}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#compartment_id FileStorageOutboundConnector#compartment_id}.

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.connectorType"></a>

```csharp
public string ConnectorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#connector_type FileStorageOutboundConnector#connector_type}.

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.endpoints"></a>

```csharp
public object Endpoints { get; set; }
```

- *Type:* object

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#endpoints FileStorageOutboundConnector#endpoints}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#defined_tags FileStorageOutboundConnector#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#display_name FileStorageOutboundConnector#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#freeform_tags FileStorageOutboundConnector#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#id FileStorageOutboundConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#is_lock_override FileStorageOutboundConnector#is_lock_override}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#locks FileStorageOutboundConnector#locks}

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#password_secret_id FileStorageOutboundConnector#password_secret_id}.

---

##### `PasswordSecretVersion`<sup>Optional</sup> <a name="PasswordSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.passwordSecretVersion"></a>

```csharp
public double PasswordSecretVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#password_secret_version FileStorageOutboundConnector#password_secret_version}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorConfig.property.timeouts"></a>

```csharp
public FileStorageOutboundConnectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts">FileStorageOutboundConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#timeouts FileStorageOutboundConnector#timeouts}

---

### FileStorageOutboundConnectorEndpoints <a name="FileStorageOutboundConnectorEndpoints" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnectorEndpoints {
    string Hostname,
    string Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpoints.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#hostname FileStorageOutboundConnector#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpoints.property.port">Port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#port FileStorageOutboundConnector#port}. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpoints.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#hostname FileStorageOutboundConnector#hostname}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpoints.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#port FileStorageOutboundConnector#port}.

---

### FileStorageOutboundConnectorLocks <a name="FileStorageOutboundConnectorLocks" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnectorLocks {
    string Type,
    string Message = null,
    string RelatedResourceId = null,
    string TimeCreated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#type FileStorageOutboundConnector#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#message FileStorageOutboundConnector#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#related_resource_id FileStorageOutboundConnector#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#time_created FileStorageOutboundConnector#time_created}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#type FileStorageOutboundConnector#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#message FileStorageOutboundConnector#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#related_resource_id FileStorageOutboundConnector#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocks.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#time_created FileStorageOutboundConnector#time_created}.

---

### FileStorageOutboundConnectorTimeouts <a name="FileStorageOutboundConnectorTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#create FileStorageOutboundConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#delete FileStorageOutboundConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#update FileStorageOutboundConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#create FileStorageOutboundConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#delete FileStorageOutboundConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_outbound_connector#update FileStorageOutboundConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageOutboundConnectorEndpointsList <a name="FileStorageOutboundConnectorEndpointsList" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnectorEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.get"></a>

```csharp
private FileStorageOutboundConnectorEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageOutboundConnectorEndpointsOutputReference <a name="FileStorageOutboundConnectorEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnectorEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorEndpointsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageOutboundConnectorLocksList <a name="FileStorageOutboundConnectorLocksList" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnectorLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.get"></a>

```csharp
private FileStorageOutboundConnectorLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageOutboundConnectorLocksOutputReference <a name="FileStorageOutboundConnectorLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnectorLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.resetRelatedResourceId"></a>

```csharp
private void ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.relatedResourceIdInput"></a>

```csharp
public string RelatedResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FileStorageOutboundConnectorTimeoutsOutputReference <a name="FileStorageOutboundConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FileStorageOutboundConnectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageOutboundConnector.FileStorageOutboundConnectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



