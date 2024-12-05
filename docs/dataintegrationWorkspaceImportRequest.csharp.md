# `dataintegrationWorkspaceImportRequest` Submodule <a name="`dataintegrationWorkspaceImportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceImportRequest <a name="DataintegrationWorkspaceImportRequest" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceImportRequest(Construct Scope, string Id, DataintegrationWorkspaceImportRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig">DataintegrationWorkspaceImportRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig">DataintegrationWorkspaceImportRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putImportConflictResolution">PutImportConflictResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetAreDataAssetReferencesIncluded">ResetAreDataAssetReferencesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetImportConflictResolution">ResetImportConflictResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectKeyForImport">ResetObjectKeyForImport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageRegion">ResetObjectStorageRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageTenancyId">ResetObjectStorageTenancyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImportConflictResolution` <a name="PutImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putImportConflictResolution"></a>

```csharp
private void PutImportConflictResolution(DataintegrationWorkspaceImportRequestImportConflictResolution Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putImportConflictResolution.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putTimeouts"></a>

```csharp
private void PutTimeouts(DataintegrationWorkspaceImportRequestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

---

##### `ResetAreDataAssetReferencesIncluded` <a name="ResetAreDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetAreDataAssetReferencesIncluded"></a>

```csharp
private void ResetAreDataAssetReferencesIncluded()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportConflictResolution` <a name="ResetImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetImportConflictResolution"></a>

```csharp
private void ResetImportConflictResolution()
```

##### `ResetObjectKeyForImport` <a name="ResetObjectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectKeyForImport"></a>

```csharp
private void ResetObjectKeyForImport()
```

##### `ResetObjectStorageRegion` <a name="ResetObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageRegion"></a>

```csharp
private void ResetObjectStorageRegion()
```

##### `ResetObjectStorageTenancyId` <a name="ResetObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageTenancyId"></a>

```csharp
private void ResetObjectStorageTenancyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceImportRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceImportRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceImportRequest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceImportRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataintegrationWorkspaceImportRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataintegrationWorkspaceImportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceImportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.errorMessages">ErrorMessages</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolution">ImportConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference">DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importedObjects">ImportedObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList">DataintegrationWorkspaceImportRequestImportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference">DataintegrationWorkspaceImportRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.totalImportedObjectCount">TotalImportedObjectCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncludedInput">AreDataAssetReferencesIncludedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolutionInput">ImportConflictResolutionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImportInput">ObjectKeyForImportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegionInput">ObjectStorageRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyIdInput">ObjectStorageTenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded">AreDataAssetReferencesIncluded</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImport">ObjectKeyForImport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegion">ObjectStorageRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyId">ObjectStorageTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.errorMessages"></a>

```csharp
public StringMap ErrorMessages { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ImportConflictResolution`<sup>Required</sup> <a name="ImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolution"></a>

```csharp
public DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference ImportConflictResolution { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference">DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference</a>

---

##### `ImportedObjects`<sup>Required</sup> <a name="ImportedObjects" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importedObjects"></a>

```csharp
public DataintegrationWorkspaceImportRequestImportedObjectsList ImportedObjects { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList">DataintegrationWorkspaceImportRequestImportedObjectsList</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeEndedInMillis`<sup>Required</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeEndedInMillis"></a>

```csharp
public string TimeEndedInMillis { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeouts"></a>

```csharp
public DataintegrationWorkspaceImportRequestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference">DataintegrationWorkspaceImportRequestTimeoutsOutputReference</a>

---

##### `TimeStartedInMillis`<sup>Required</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeStartedInMillis"></a>

```csharp
public string TimeStartedInMillis { get; }
```

- *Type:* string

---

##### `TotalImportedObjectCount`<sup>Required</sup> <a name="TotalImportedObjectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.totalImportedObjectCount"></a>

```csharp
public double TotalImportedObjectCount { get; }
```

- *Type:* double

---

##### `AreDataAssetReferencesIncludedInput`<sup>Optional</sup> <a name="AreDataAssetReferencesIncludedInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncludedInput"></a>

```csharp
public object AreDataAssetReferencesIncludedInput { get; }
```

- *Type:* object

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportConflictResolutionInput`<sup>Optional</sup> <a name="ImportConflictResolutionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolutionInput"></a>

```csharp
public DataintegrationWorkspaceImportRequestImportConflictResolution ImportConflictResolutionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

---

##### `ObjectKeyForImportInput`<sup>Optional</sup> <a name="ObjectKeyForImportInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImportInput"></a>

```csharp
public string ObjectKeyForImportInput { get; }
```

- *Type:* string

---

##### `ObjectStorageRegionInput`<sup>Optional</sup> <a name="ObjectStorageRegionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegionInput"></a>

```csharp
public string ObjectStorageRegionInput { get; }
```

- *Type:* string

---

##### `ObjectStorageTenancyIdInput`<sup>Optional</sup> <a name="ObjectStorageTenancyIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyIdInput"></a>

```csharp
public string ObjectStorageTenancyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `AreDataAssetReferencesIncluded`<sup>Required</sup> <a name="AreDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded"></a>

```csharp
public object AreDataAssetReferencesIncluded { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ObjectKeyForImport`<sup>Required</sup> <a name="ObjectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImport"></a>

```csharp
public string ObjectKeyForImport { get; }
```

- *Type:* string

---

##### `ObjectStorageRegion`<sup>Required</sup> <a name="ObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegion"></a>

```csharp
public string ObjectStorageRegion { get; }
```

- *Type:* string

---

##### `ObjectStorageTenancyId`<sup>Required</sup> <a name="ObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyId"></a>

```csharp
public string ObjectStorageTenancyId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceImportRequestConfig <a name="DataintegrationWorkspaceImportRequestConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceImportRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string FileName,
    string WorkspaceId,
    object AreDataAssetReferencesIncluded = null,
    string Id = null,
    DataintegrationWorkspaceImportRequestImportConflictResolution ImportConflictResolution = null,
    string ObjectKeyForImport = null,
    string ObjectStorageRegion = null,
    string ObjectStorageTenancyId = null,
    DataintegrationWorkspaceImportRequestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#bucket DataintegrationWorkspaceImportRequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.fileName">FileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#file_name DataintegrationWorkspaceImportRequest#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#workspace_id DataintegrationWorkspaceImportRequest#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.areDataAssetReferencesIncluded">AreDataAssetReferencesIncluded</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#are_data_asset_references_included DataintegrationWorkspaceImportRequest#are_data_asset_references_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#id DataintegrationWorkspaceImportRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.importConflictResolution">ImportConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | import_conflict_resolution block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectKeyForImport">ObjectKeyForImport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_key_for_import DataintegrationWorkspaceImportRequest#object_key_for_import}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageRegion">ObjectStorageRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_region DataintegrationWorkspaceImportRequest#object_storage_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageTenancyId">ObjectStorageTenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_tenancy_id DataintegrationWorkspaceImportRequest#object_storage_tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#bucket DataintegrationWorkspaceImportRequest#bucket}.

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#file_name DataintegrationWorkspaceImportRequest#file_name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#workspace_id DataintegrationWorkspaceImportRequest#workspace_id}.

---

##### `AreDataAssetReferencesIncluded`<sup>Optional</sup> <a name="AreDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.areDataAssetReferencesIncluded"></a>

```csharp
public object AreDataAssetReferencesIncluded { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#are_data_asset_references_included DataintegrationWorkspaceImportRequest#are_data_asset_references_included}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#id DataintegrationWorkspaceImportRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportConflictResolution`<sup>Optional</sup> <a name="ImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.importConflictResolution"></a>

```csharp
public DataintegrationWorkspaceImportRequestImportConflictResolution ImportConflictResolution { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

import_conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution DataintegrationWorkspaceImportRequest#import_conflict_resolution}

---

##### `ObjectKeyForImport`<sup>Optional</sup> <a name="ObjectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectKeyForImport"></a>

```csharp
public string ObjectKeyForImport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_key_for_import DataintegrationWorkspaceImportRequest#object_key_for_import}.

---

##### `ObjectStorageRegion`<sup>Optional</sup> <a name="ObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageRegion"></a>

```csharp
public string ObjectStorageRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_region DataintegrationWorkspaceImportRequest#object_storage_region}.

---

##### `ObjectStorageTenancyId`<sup>Optional</sup> <a name="ObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageTenancyId"></a>

```csharp
public string ObjectStorageTenancyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_tenancy_id DataintegrationWorkspaceImportRequest#object_storage_tenancy_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.timeouts"></a>

```csharp
public DataintegrationWorkspaceImportRequestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#timeouts DataintegrationWorkspaceImportRequest#timeouts}

---

### DataintegrationWorkspaceImportRequestImportConflictResolution <a name="DataintegrationWorkspaceImportRequestImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceImportRequestImportConflictResolution {
    string ImportConflictResolutionType,
    string DuplicatePrefix = null,
    string DuplicateSuffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.importConflictResolutionType">ImportConflictResolutionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution_type DataintegrationWorkspaceImportRequest#import_conflict_resolution_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicatePrefix">DuplicatePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_prefix DataintegrationWorkspaceImportRequest#duplicate_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicateSuffix">DuplicateSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_suffix DataintegrationWorkspaceImportRequest#duplicate_suffix}. |

---

##### `ImportConflictResolutionType`<sup>Required</sup> <a name="ImportConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.importConflictResolutionType"></a>

```csharp
public string ImportConflictResolutionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution_type DataintegrationWorkspaceImportRequest#import_conflict_resolution_type}.

---

##### `DuplicatePrefix`<sup>Optional</sup> <a name="DuplicatePrefix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicatePrefix"></a>

```csharp
public string DuplicatePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_prefix DataintegrationWorkspaceImportRequest#duplicate_prefix}.

---

##### `DuplicateSuffix`<sup>Optional</sup> <a name="DuplicateSuffix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicateSuffix"></a>

```csharp
public string DuplicateSuffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_suffix DataintegrationWorkspaceImportRequest#duplicate_suffix}.

---

### DataintegrationWorkspaceImportRequestImportedObjects <a name="DataintegrationWorkspaceImportRequestImportedObjects" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceImportRequestImportedObjects {

};
```


### DataintegrationWorkspaceImportRequestTimeouts <a name="DataintegrationWorkspaceImportRequestTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceImportRequestTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#create DataintegrationWorkspaceImportRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#delete DataintegrationWorkspaceImportRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#update DataintegrationWorkspaceImportRequest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#create DataintegrationWorkspaceImportRequest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#delete DataintegrationWorkspaceImportRequest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#update DataintegrationWorkspaceImportRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference <a name="DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicatePrefix">ResetDuplicatePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicateSuffix">ResetDuplicateSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuplicatePrefix` <a name="ResetDuplicatePrefix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicatePrefix"></a>

```csharp
private void ResetDuplicatePrefix()
```

##### `ResetDuplicateSuffix` <a name="ResetDuplicateSuffix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicateSuffix"></a>

```csharp
private void ResetDuplicateSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefixInput">DuplicatePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffixInput">DuplicateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionTypeInput">ImportConflictResolutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix">DuplicatePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix">DuplicateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType">ImportConflictResolutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DuplicatePrefixInput`<sup>Optional</sup> <a name="DuplicatePrefixInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefixInput"></a>

```csharp
public string DuplicatePrefixInput { get; }
```

- *Type:* string

---

##### `DuplicateSuffixInput`<sup>Optional</sup> <a name="DuplicateSuffixInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffixInput"></a>

```csharp
public string DuplicateSuffixInput { get; }
```

- *Type:* string

---

##### `ImportConflictResolutionTypeInput`<sup>Optional</sup> <a name="ImportConflictResolutionTypeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionTypeInput"></a>

```csharp
public string ImportConflictResolutionTypeInput { get; }
```

- *Type:* string

---

##### `DuplicatePrefix`<sup>Required</sup> <a name="DuplicatePrefix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix"></a>

```csharp
public string DuplicatePrefix { get; }
```

- *Type:* string

---

##### `DuplicateSuffix`<sup>Required</sup> <a name="DuplicateSuffix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix"></a>

```csharp
public string DuplicateSuffix { get; }
```

- *Type:* string

---

##### `ImportConflictResolutionType`<sup>Required</sup> <a name="ImportConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType"></a>

```csharp
public string ImportConflictResolutionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceImportRequestImportConflictResolution InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

---


### DataintegrationWorkspaceImportRequestImportedObjectsList <a name="DataintegrationWorkspaceImportRequestImportedObjectsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceImportRequestImportedObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.get"></a>

```csharp
private DataintegrationWorkspaceImportRequestImportedObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceImportRequestImportedObjectsOutputReference <a name="DataintegrationWorkspaceImportRequestImportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceImportRequestImportedObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath">NamePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey">NewKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey">OldKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction">ResolutionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis">TimeUpdatedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects">DataintegrationWorkspaceImportRequestImportedObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey"></a>

```csharp
public string AggregatorKey { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath"></a>

```csharp
public string NamePath { get; }
```

- *Type:* string

---

##### `NewKey`<sup>Required</sup> <a name="NewKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey"></a>

```csharp
public string NewKey { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; }
```

- *Type:* string

---

##### `OldKey`<sup>Required</sup> <a name="OldKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey"></a>

```csharp
public string OldKey { get; }
```

- *Type:* string

---

##### `ResolutionAction`<sup>Required</sup> <a name="ResolutionAction" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction"></a>

```csharp
public string ResolutionAction { get; }
```

- *Type:* string

---

##### `TimeUpdatedInMillis`<sup>Required</sup> <a name="TimeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis"></a>

```csharp
public string TimeUpdatedInMillis { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceImportRequestImportedObjects InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects">DataintegrationWorkspaceImportRequestImportedObjects</a>

---


### DataintegrationWorkspaceImportRequestTimeoutsOutputReference <a name="DataintegrationWorkspaceImportRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceImportRequestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



