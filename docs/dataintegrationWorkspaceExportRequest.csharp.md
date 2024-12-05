# `dataintegrationWorkspaceExportRequest` Submodule <a name="`dataintegrationWorkspaceExportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceExportRequest <a name="DataintegrationWorkspaceExportRequest" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request oci_dataintegration_workspace_export_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceExportRequest(Construct Scope, string Id, DataintegrationWorkspaceExportRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig">DataintegrationWorkspaceExportRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig">DataintegrationWorkspaceExportRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetAreReferencesIncluded">ResetAreReferencesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetIsObjectOverwriteEnabled">ResetIsObjectOverwriteEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectKeys">ResetObjectKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageRegion">ResetObjectStorageRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageTenancyId">ResetObjectStorageTenancyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.putTimeouts"></a>

```csharp
private void PutTimeouts(DataintegrationWorkspaceExportRequestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

---

##### `ResetAreReferencesIncluded` <a name="ResetAreReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetAreReferencesIncluded"></a>

```csharp
private void ResetAreReferencesIncluded()
```

##### `ResetFileName` <a name="ResetFileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFileName"></a>

```csharp
private void ResetFileName()
```

##### `ResetFilters` <a name="ResetFilters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsObjectOverwriteEnabled` <a name="ResetIsObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetIsObjectOverwriteEnabled"></a>

```csharp
private void ResetIsObjectOverwriteEnabled()
```

##### `ResetObjectKeys` <a name="ResetObjectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectKeys"></a>

```csharp
private void ResetObjectKeys()
```

##### `ResetObjectStorageRegion` <a name="ResetObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageRegion"></a>

```csharp
private void ResetObjectStorageRegion()
```

##### `ResetObjectStorageTenancyId` <a name="ResetObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageTenancyId"></a>

```csharp
private void ResetObjectStorageTenancyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceExportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceExportRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceExportRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceExportRequest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceExportRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataintegrationWorkspaceExportRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataintegrationWorkspaceExportRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataintegrationWorkspaceExportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceExportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.errorMessages">ErrorMessages</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.exportedItems">ExportedItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList">DataintegrationWorkspaceExportRequestExportedItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.referencedItems">ReferencedItems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference">DataintegrationWorkspaceExportRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.totalExportedObjectCount">TotalExportedObjectCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncludedInput">AreReferencesIncludedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filtersInput">FiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabledInput">IsObjectOverwriteEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeysInput">ObjectKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegionInput">ObjectStorageRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyIdInput">ObjectStorageTenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncluded">AreReferencesIncluded</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filters">Filters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabled">IsObjectOverwriteEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeys">ObjectKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegion">ObjectStorageRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyId">ObjectStorageTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.errorMessages"></a>

```csharp
public StringMap ErrorMessages { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExportedItems`<sup>Required</sup> <a name="ExportedItems" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.exportedItems"></a>

```csharp
public DataintegrationWorkspaceExportRequestExportedItemsList ExportedItems { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList">DataintegrationWorkspaceExportRequestExportedItemsList</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReferencedItems`<sup>Required</sup> <a name="ReferencedItems" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.referencedItems"></a>

```csharp
public string ReferencedItems { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeEndedInMillis`<sup>Required</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeEndedInMillis"></a>

```csharp
public string TimeEndedInMillis { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeouts"></a>

```csharp
public DataintegrationWorkspaceExportRequestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference">DataintegrationWorkspaceExportRequestTimeoutsOutputReference</a>

---

##### `TimeStartedInMillis`<sup>Required</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeStartedInMillis"></a>

```csharp
public string TimeStartedInMillis { get; }
```

- *Type:* string

---

##### `TotalExportedObjectCount`<sup>Required</sup> <a name="TotalExportedObjectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.totalExportedObjectCount"></a>

```csharp
public double TotalExportedObjectCount { get; }
```

- *Type:* double

---

##### `AreReferencesIncludedInput`<sup>Optional</sup> <a name="AreReferencesIncludedInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncludedInput"></a>

```csharp
public object AreReferencesIncludedInput { get; }
```

- *Type:* object

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filtersInput"></a>

```csharp
public string[] FiltersInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsObjectOverwriteEnabledInput`<sup>Optional</sup> <a name="IsObjectOverwriteEnabledInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabledInput"></a>

```csharp
public object IsObjectOverwriteEnabledInput { get; }
```

- *Type:* object

---

##### `ObjectKeysInput`<sup>Optional</sup> <a name="ObjectKeysInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeysInput"></a>

```csharp
public string[] ObjectKeysInput { get; }
```

- *Type:* string[]

---

##### `ObjectStorageRegionInput`<sup>Optional</sup> <a name="ObjectStorageRegionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegionInput"></a>

```csharp
public string ObjectStorageRegionInput { get; }
```

- *Type:* string

---

##### `ObjectStorageTenancyIdInput`<sup>Optional</sup> <a name="ObjectStorageTenancyIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyIdInput"></a>

```csharp
public string ObjectStorageTenancyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `AreReferencesIncluded`<sup>Required</sup> <a name="AreReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncluded"></a>

```csharp
public object AreReferencesIncluded { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filters"></a>

```csharp
public string[] Filters { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsObjectOverwriteEnabled`<sup>Required</sup> <a name="IsObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabled"></a>

```csharp
public object IsObjectOverwriteEnabled { get; }
```

- *Type:* object

---

##### `ObjectKeys`<sup>Required</sup> <a name="ObjectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeys"></a>

```csharp
public string[] ObjectKeys { get; }
```

- *Type:* string[]

---

##### `ObjectStorageRegion`<sup>Required</sup> <a name="ObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegion"></a>

```csharp
public string ObjectStorageRegion { get; }
```

- *Type:* string

---

##### `ObjectStorageTenancyId`<sup>Required</sup> <a name="ObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyId"></a>

```csharp
public string ObjectStorageTenancyId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceExportRequestConfig <a name="DataintegrationWorkspaceExportRequestConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceExportRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string WorkspaceId,
    object AreReferencesIncluded = null,
    string FileName = null,
    string[] Filters = null,
    string Id = null,
    object IsObjectOverwriteEnabled = null,
    string[] ObjectKeys = null,
    string ObjectStorageRegion = null,
    string ObjectStorageTenancyId = null,
    DataintegrationWorkspaceExportRequestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#bucket DataintegrationWorkspaceExportRequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#workspace_id DataintegrationWorkspaceExportRequest#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.areReferencesIncluded">AreReferencesIncluded</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#are_references_included DataintegrationWorkspaceExportRequest#are_references_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.fileName">FileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#file_name DataintegrationWorkspaceExportRequest#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.filters">Filters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#filters DataintegrationWorkspaceExportRequest#filters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#id DataintegrationWorkspaceExportRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.isObjectOverwriteEnabled">IsObjectOverwriteEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#is_object_overwrite_enabled DataintegrationWorkspaceExportRequest#is_object_overwrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectKeys">ObjectKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_keys DataintegrationWorkspaceExportRequest#object_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageRegion">ObjectStorageRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_region DataintegrationWorkspaceExportRequest#object_storage_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageTenancyId">ObjectStorageTenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_tenancy_id DataintegrationWorkspaceExportRequest#object_storage_tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#bucket DataintegrationWorkspaceExportRequest#bucket}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#workspace_id DataintegrationWorkspaceExportRequest#workspace_id}.

---

##### `AreReferencesIncluded`<sup>Optional</sup> <a name="AreReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.areReferencesIncluded"></a>

```csharp
public object AreReferencesIncluded { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#are_references_included DataintegrationWorkspaceExportRequest#are_references_included}.

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#file_name DataintegrationWorkspaceExportRequest#file_name}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.filters"></a>

```csharp
public string[] Filters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#filters DataintegrationWorkspaceExportRequest#filters}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#id DataintegrationWorkspaceExportRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsObjectOverwriteEnabled`<sup>Optional</sup> <a name="IsObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.isObjectOverwriteEnabled"></a>

```csharp
public object IsObjectOverwriteEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#is_object_overwrite_enabled DataintegrationWorkspaceExportRequest#is_object_overwrite_enabled}.

---

##### `ObjectKeys`<sup>Optional</sup> <a name="ObjectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectKeys"></a>

```csharp
public string[] ObjectKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_keys DataintegrationWorkspaceExportRequest#object_keys}.

---

##### `ObjectStorageRegion`<sup>Optional</sup> <a name="ObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageRegion"></a>

```csharp
public string ObjectStorageRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_region DataintegrationWorkspaceExportRequest#object_storage_region}.

---

##### `ObjectStorageTenancyId`<sup>Optional</sup> <a name="ObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageTenancyId"></a>

```csharp
public string ObjectStorageTenancyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_tenancy_id DataintegrationWorkspaceExportRequest#object_storage_tenancy_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.timeouts"></a>

```csharp
public DataintegrationWorkspaceExportRequestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#timeouts DataintegrationWorkspaceExportRequest#timeouts}

---

### DataintegrationWorkspaceExportRequestExportedItems <a name="DataintegrationWorkspaceExportRequestExportedItems" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceExportRequestExportedItems {

};
```


### DataintegrationWorkspaceExportRequestTimeouts <a name="DataintegrationWorkspaceExportRequestTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceExportRequestTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#create DataintegrationWorkspaceExportRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#delete DataintegrationWorkspaceExportRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#update DataintegrationWorkspaceExportRequest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#create DataintegrationWorkspaceExportRequest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#delete DataintegrationWorkspaceExportRequest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#update DataintegrationWorkspaceExportRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceExportRequestExportedItemsList <a name="DataintegrationWorkspaceExportRequestExportedItemsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceExportRequestExportedItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.get"></a>

```csharp
private DataintegrationWorkspaceExportRequestExportedItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceExportRequestExportedItemsOutputReference <a name="DataintegrationWorkspaceExportRequestExportedItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceExportRequestExportedItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.namePath">NamePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.timeUpdatedInMillis">TimeUpdatedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems">DataintegrationWorkspaceExportRequestExportedItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.aggregatorKey"></a>

```csharp
public string AggregatorKey { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.namePath"></a>

```csharp
public string NamePath { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; }
```

- *Type:* string

---

##### `TimeUpdatedInMillis`<sup>Required</sup> <a name="TimeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.timeUpdatedInMillis"></a>

```csharp
public string TimeUpdatedInMillis { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceExportRequestExportedItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems">DataintegrationWorkspaceExportRequestExportedItems</a>

---


### DataintegrationWorkspaceExportRequestTimeoutsOutputReference <a name="DataintegrationWorkspaceExportRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceExportRequestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



