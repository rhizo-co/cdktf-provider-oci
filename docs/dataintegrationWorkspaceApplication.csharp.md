# `dataintegrationWorkspaceApplication` Submodule <a name="`dataintegrationWorkspaceApplication` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceApplication <a name="DataintegrationWorkspaceApplication" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application oci_dataintegration_workspace_application}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplication(Construct Scope, string Id, DataintegrationWorkspaceApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig">DataintegrationWorkspaceApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig">DataintegrationWorkspaceApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.putRegistryMetadata">PutRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.putSourceApplicationInfo">PutSourceApplicationInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetModelVersion">ResetModelVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetObjectStatus">ResetObjectStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetRegistryMetadata">ResetRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetSourceApplicationInfo">ResetSourceApplicationInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRegistryMetadata` <a name="PutRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.putRegistryMetadata"></a>

```csharp
private void PutRegistryMetadata(DataintegrationWorkspaceApplicationRegistryMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.putRegistryMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata">DataintegrationWorkspaceApplicationRegistryMetadata</a>

---

##### `PutSourceApplicationInfo` <a name="PutSourceApplicationInfo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.putSourceApplicationInfo"></a>

```csharp
private void PutSourceApplicationInfo(DataintegrationWorkspaceApplicationSourceApplicationInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.putSourceApplicationInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo">DataintegrationWorkspaceApplicationSourceApplicationInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.putTimeouts"></a>

```csharp
private void PutTimeouts(DataintegrationWorkspaceApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts">DataintegrationWorkspaceApplicationTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetModelVersion` <a name="ResetModelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetModelVersion"></a>

```csharp
private void ResetModelVersion()
```

##### `ResetObjectStatus` <a name="ResetObjectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetObjectStatus"></a>

```csharp
private void ResetObjectStatus()
```

##### `ResetRegistryMetadata` <a name="ResetRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetRegistryMetadata"></a>

```csharp
private void ResetRegistryMetadata()
```

##### `ResetSourceApplicationInfo` <a name="ResetSourceApplicationInfo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetSourceApplicationInfo"></a>

```csharp
private void ResetSourceApplicationInfo()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataintegrationWorkspaceApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataintegrationWorkspaceApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataintegrationWorkspaceApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataintegrationWorkspaceApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.applicationVersion">ApplicationVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.dependentObjectMetadata">DependentObjectMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList">DataintegrationWorkspaceApplicationDependentObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.keyMap">KeyMap</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList">DataintegrationWorkspaceApplicationMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.objectVersion">ObjectVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.parentRef">ParentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList">DataintegrationWorkspaceApplicationParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.publishedObjectMetadata">PublishedObjectMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList">DataintegrationWorkspaceApplicationPublishedObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.registryMetadata">RegistryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationRegistryMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.sourceApplicationInfo">SourceApplicationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference">DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference">DataintegrationWorkspaceApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timePatched">TimePatched</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.modelTypeInput">ModelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.modelVersionInput">ModelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.objectStatusInput">ObjectStatusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.registryMetadataInput">RegistryMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata">DataintegrationWorkspaceApplicationRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.sourceApplicationInfoInput">SourceApplicationInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo">DataintegrationWorkspaceApplicationSourceApplicationInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.modelType">ModelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.modelVersion">ModelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.objectStatus">ObjectStatus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationVersion`<sup>Required</sup> <a name="ApplicationVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.applicationVersion"></a>

```csharp
public double ApplicationVersion { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DependentObjectMetadata`<sup>Required</sup> <a name="DependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.dependentObjectMetadata"></a>

```csharp
public DataintegrationWorkspaceApplicationDependentObjectMetadataList DependentObjectMetadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList">DataintegrationWorkspaceApplicationDependentObjectMetadataList</a>

---

##### `KeyMap`<sup>Required</sup> <a name="KeyMap" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.keyMap"></a>

```csharp
public StringMap KeyMap { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.metadata"></a>

```csharp
public DataintegrationWorkspaceApplicationMetadataList Metadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList">DataintegrationWorkspaceApplicationMetadataList</a>

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.objectVersion"></a>

```csharp
public double ObjectVersion { get; }
```

- *Type:* double

---

##### `ParentRef`<sup>Required</sup> <a name="ParentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.parentRef"></a>

```csharp
public DataintegrationWorkspaceApplicationParentRefList ParentRef { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList">DataintegrationWorkspaceApplicationParentRefList</a>

---

##### `PublishedObjectMetadata`<sup>Required</sup> <a name="PublishedObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.publishedObjectMetadata"></a>

```csharp
public DataintegrationWorkspaceApplicationPublishedObjectMetadataList PublishedObjectMetadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList">DataintegrationWorkspaceApplicationPublishedObjectMetadataList</a>

---

##### `RegistryMetadata`<sup>Required</sup> <a name="RegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.registryMetadata"></a>

```csharp
public DataintegrationWorkspaceApplicationRegistryMetadataOutputReference RegistryMetadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationRegistryMetadataOutputReference</a>

---

##### `SourceApplicationInfo`<sup>Required</sup> <a name="SourceApplicationInfo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.sourceApplicationInfo"></a>

```csharp
public DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference SourceApplicationInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference">DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timeouts"></a>

```csharp
public DataintegrationWorkspaceApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference">DataintegrationWorkspaceApplicationTimeoutsOutputReference</a>

---

##### `TimePatched`<sup>Required</sup> <a name="TimePatched" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timePatched"></a>

```csharp
public string TimePatched { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ModelTypeInput`<sup>Optional</sup> <a name="ModelTypeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.modelTypeInput"></a>

```csharp
public string ModelTypeInput { get; }
```

- *Type:* string

---

##### `ModelVersionInput`<sup>Optional</sup> <a name="ModelVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.modelVersionInput"></a>

```csharp
public string ModelVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectStatusInput`<sup>Optional</sup> <a name="ObjectStatusInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.objectStatusInput"></a>

```csharp
public double ObjectStatusInput { get; }
```

- *Type:* double

---

##### `RegistryMetadataInput`<sup>Optional</sup> <a name="RegistryMetadataInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.registryMetadataInput"></a>

```csharp
public DataintegrationWorkspaceApplicationRegistryMetadata RegistryMetadataInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata">DataintegrationWorkspaceApplicationRegistryMetadata</a>

---

##### `SourceApplicationInfoInput`<sup>Optional</sup> <a name="SourceApplicationInfoInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.sourceApplicationInfoInput"></a>

```csharp
public DataintegrationWorkspaceApplicationSourceApplicationInfo SourceApplicationInfoInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo">DataintegrationWorkspaceApplicationSourceApplicationInfo</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.modelType"></a>

```csharp
public string ModelType { get; }
```

- *Type:* string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.modelVersion"></a>

```csharp
public string ModelVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectStatus`<sup>Required</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.objectStatus"></a>

```csharp
public double ObjectStatus { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceApplicationConfig <a name="DataintegrationWorkspaceApplicationConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Identifier,
    string ModelType,
    string Name,
    string WorkspaceId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string Key = null,
    string ModelVersion = null,
    double ObjectStatus = null,
    DataintegrationWorkspaceApplicationRegistryMetadata RegistryMetadata = null,
    DataintegrationWorkspaceApplicationSourceApplicationInfo SourceApplicationInfo = null,
    string State = null,
    DataintegrationWorkspaceApplicationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#identifier DataintegrationWorkspaceApplication#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.modelType">ModelType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#model_type DataintegrationWorkspaceApplication#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#name DataintegrationWorkspaceApplication#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#workspace_id DataintegrationWorkspaceApplication#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#defined_tags DataintegrationWorkspaceApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#description DataintegrationWorkspaceApplication#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#display_name DataintegrationWorkspaceApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#freeform_tags DataintegrationWorkspaceApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#id DataintegrationWorkspaceApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#key DataintegrationWorkspaceApplication#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.modelVersion">ModelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#model_version DataintegrationWorkspaceApplication#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.objectStatus">ObjectStatus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#object_status DataintegrationWorkspaceApplication#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.registryMetadata">RegistryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata">DataintegrationWorkspaceApplicationRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.sourceApplicationInfo">SourceApplicationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo">DataintegrationWorkspaceApplicationSourceApplicationInfo</a></code> | source_application_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#state DataintegrationWorkspaceApplication#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts">DataintegrationWorkspaceApplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#identifier DataintegrationWorkspaceApplication#identifier}.

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.modelType"></a>

```csharp
public string ModelType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#model_type DataintegrationWorkspaceApplication#model_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#name DataintegrationWorkspaceApplication#name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#workspace_id DataintegrationWorkspaceApplication#workspace_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#defined_tags DataintegrationWorkspaceApplication#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#description DataintegrationWorkspaceApplication#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#display_name DataintegrationWorkspaceApplication#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#freeform_tags DataintegrationWorkspaceApplication#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#id DataintegrationWorkspaceApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#key DataintegrationWorkspaceApplication#key}.

---

##### `ModelVersion`<sup>Optional</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.modelVersion"></a>

```csharp
public string ModelVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#model_version DataintegrationWorkspaceApplication#model_version}.

---

##### `ObjectStatus`<sup>Optional</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.objectStatus"></a>

```csharp
public double ObjectStatus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#object_status DataintegrationWorkspaceApplication#object_status}.

---

##### `RegistryMetadata`<sup>Optional</sup> <a name="RegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.registryMetadata"></a>

```csharp
public DataintegrationWorkspaceApplicationRegistryMetadata RegistryMetadata { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata">DataintegrationWorkspaceApplicationRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#registry_metadata DataintegrationWorkspaceApplication#registry_metadata}

---

##### `SourceApplicationInfo`<sup>Optional</sup> <a name="SourceApplicationInfo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.sourceApplicationInfo"></a>

```csharp
public DataintegrationWorkspaceApplicationSourceApplicationInfo SourceApplicationInfo { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo">DataintegrationWorkspaceApplicationSourceApplicationInfo</a>

source_application_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#source_application_info DataintegrationWorkspaceApplication#source_application_info}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#state DataintegrationWorkspaceApplication#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationConfig.property.timeouts"></a>

```csharp
public DataintegrationWorkspaceApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts">DataintegrationWorkspaceApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#timeouts DataintegrationWorkspaceApplication#timeouts}

---

### DataintegrationWorkspaceApplicationDependentObjectMetadata <a name="DataintegrationWorkspaceApplicationDependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationDependentObjectMetadata {

};
```


### DataintegrationWorkspaceApplicationMetadata <a name="DataintegrationWorkspaceApplicationMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadata {

};
```


### DataintegrationWorkspaceApplicationMetadataAggregator <a name="DataintegrationWorkspaceApplicationMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataAggregator {

};
```


### DataintegrationWorkspaceApplicationMetadataCountStatistics <a name="DataintegrationWorkspaceApplicationMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataCountStatistics {

};
```


### DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct <a name="DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct {

};
```


### DataintegrationWorkspaceApplicationParentRef <a name="DataintegrationWorkspaceApplicationParentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationParentRef {

};
```


### DataintegrationWorkspaceApplicationPublishedObjectMetadata <a name="DataintegrationWorkspaceApplicationPublishedObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPublishedObjectMetadata {

};
```


### DataintegrationWorkspaceApplicationRegistryMetadata <a name="DataintegrationWorkspaceApplicationRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationRegistryMetadata {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.aggregatorKey">AggregatorKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#aggregator_key DataintegrationWorkspaceApplication#aggregator_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.isFavorite">IsFavorite</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#is_favorite DataintegrationWorkspaceApplication#is_favorite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#key DataintegrationWorkspaceApplication#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.labels">Labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#labels DataintegrationWorkspaceApplication#labels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.registryVersion">RegistryVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#registry_version DataintegrationWorkspaceApplication#registry_version}. |

---

##### `AggregatorKey`<sup>Optional</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.aggregatorKey"></a>

```csharp
public string AggregatorKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#aggregator_key DataintegrationWorkspaceApplication#aggregator_key}.

---

##### `IsFavorite`<sup>Optional</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.isFavorite"></a>

```csharp
public object IsFavorite { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#is_favorite DataintegrationWorkspaceApplication#is_favorite}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#key DataintegrationWorkspaceApplication#key}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#labels DataintegrationWorkspaceApplication#labels}.

---

##### `RegistryVersion`<sup>Optional</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata.property.registryVersion"></a>

```csharp
public double RegistryVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#registry_version DataintegrationWorkspaceApplication#registry_version}.

---

### DataintegrationWorkspaceApplicationSourceApplicationInfo <a name="DataintegrationWorkspaceApplicationSourceApplicationInfo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationSourceApplicationInfo {
    string ApplicationKey = null,
    string CopyType = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo.property.applicationKey">ApplicationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#application_key DataintegrationWorkspaceApplication#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo.property.copyType">CopyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#copy_type DataintegrationWorkspaceApplication#copy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#workspace_id DataintegrationWorkspaceApplication#workspace_id}. |

---

##### `ApplicationKey`<sup>Optional</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo.property.applicationKey"></a>

```csharp
public string ApplicationKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#application_key DataintegrationWorkspaceApplication#application_key}.

---

##### `CopyType`<sup>Optional</sup> <a name="CopyType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo.property.copyType"></a>

```csharp
public string CopyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#copy_type DataintegrationWorkspaceApplication#copy_type}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#workspace_id DataintegrationWorkspaceApplication#workspace_id}.

---

### DataintegrationWorkspaceApplicationTimeouts <a name="DataintegrationWorkspaceApplicationTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#create DataintegrationWorkspaceApplication#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#delete DataintegrationWorkspaceApplication#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#update DataintegrationWorkspaceApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#create DataintegrationWorkspaceApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#delete DataintegrationWorkspaceApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application#update DataintegrationWorkspaceApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceApplicationDependentObjectMetadataList <a name="DataintegrationWorkspaceApplicationDependentObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationDependentObjectMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference <a name="DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.namePath">NamePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadata">DataintegrationWorkspaceApplicationDependentObjectMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.namePath"></a>

```csharp
public string NamePath { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.objectVersion"></a>

```csharp
public double ObjectVersion { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadataOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationDependentObjectMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationDependentObjectMetadata">DataintegrationWorkspaceApplicationDependentObjectMetadata</a>

---


### DataintegrationWorkspaceApplicationMetadataAggregatorList <a name="DataintegrationWorkspaceApplicationMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataAggregatorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference <a name="DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregator">DataintegrationWorkspaceApplicationMetadataAggregator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationMetadataAggregator InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregator">DataintegrationWorkspaceApplicationMetadataAggregator</a>

---


### DataintegrationWorkspaceApplicationMetadataCountStatisticsList <a name="DataintegrationWorkspaceApplicationMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataCountStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList <a name="DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">ObjectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```csharp
public string ObjectCount { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference <a name="DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.property.objectTypeCountList">ObjectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatistics">DataintegrationWorkspaceApplicationMetadataCountStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectTypeCountList`<sup>Required</sup> <a name="ObjectTypeCountList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```csharp
public DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList ObjectTypeCountList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationMetadataCountStatistics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatistics">DataintegrationWorkspaceApplicationMetadataCountStatistics</a>

---


### DataintegrationWorkspaceApplicationMetadataList <a name="DataintegrationWorkspaceApplicationMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationMetadataOutputReference <a name="DataintegrationWorkspaceApplicationMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.aggregator">Aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList">DataintegrationWorkspaceApplicationMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.countStatistics">CountStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList">DataintegrationWorkspaceApplicationMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.createdByName">CreatedByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.identifierPath">IdentifierPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.infoFields">InfoFields</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.updatedByName">UpdatedByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadata">DataintegrationWorkspaceApplicationMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregator`<sup>Required</sup> <a name="Aggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.aggregator"></a>

```csharp
public DataintegrationWorkspaceApplicationMetadataAggregatorList Aggregator { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataAggregatorList">DataintegrationWorkspaceApplicationMetadataAggregatorList</a>

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.aggregatorKey"></a>

```csharp
public string AggregatorKey { get; }
```

- *Type:* string

---

##### `CountStatistics`<sup>Required</sup> <a name="CountStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.countStatistics"></a>

```csharp
public DataintegrationWorkspaceApplicationMetadataCountStatisticsList CountStatistics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataCountStatisticsList">DataintegrationWorkspaceApplicationMetadataCountStatisticsList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreatedByName`<sup>Required</sup> <a name="CreatedByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.createdByName"></a>

```csharp
public string CreatedByName { get; }
```

- *Type:* string

---

##### `IdentifierPath`<sup>Required</sup> <a name="IdentifierPath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.identifierPath"></a>

```csharp
public string IdentifierPath { get; }
```

- *Type:* string

---

##### `InfoFields`<sup>Required</sup> <a name="InfoFields" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.infoFields"></a>

```csharp
public StringMap InfoFields { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.isFavorite"></a>

```csharp
public IResolvable IsFavorite { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.registryVersion"></a>

```csharp
public double RegistryVersion { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `UpdatedByName`<sup>Required</sup> <a name="UpdatedByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.updatedByName"></a>

```csharp
public string UpdatedByName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadataOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationMetadata">DataintegrationWorkspaceApplicationMetadata</a>

---


### DataintegrationWorkspaceApplicationParentRefList <a name="DataintegrationWorkspaceApplicationParentRefList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationParentRefList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationParentRefOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationParentRefOutputReference <a name="DataintegrationWorkspaceApplicationParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationParentRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.rootDocId">RootDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRef">DataintegrationWorkspaceApplicationParentRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `RootDocId`<sup>Required</sup> <a name="RootDocId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.rootDocId"></a>

```csharp
public string RootDocId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRefOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationParentRef InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationParentRef">DataintegrationWorkspaceApplicationParentRef</a>

---


### DataintegrationWorkspaceApplicationPublishedObjectMetadataList <a name="DataintegrationWorkspaceApplicationPublishedObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPublishedObjectMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.get"></a>

```csharp
private DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference <a name="DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.namePath">NamePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadata">DataintegrationWorkspaceApplicationPublishedObjectMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.namePath"></a>

```csharp
public string NamePath { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.objectVersion"></a>

```csharp
public double ObjectVersion { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadataOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationPublishedObjectMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationPublishedObjectMetadata">DataintegrationWorkspaceApplicationPublishedObjectMetadata</a>

---


### DataintegrationWorkspaceApplicationRegistryMetadataOutputReference <a name="DataintegrationWorkspaceApplicationRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationRegistryMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetAggregatorKey">ResetAggregatorKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetIsFavorite">ResetIsFavorite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetRegistryVersion">ResetRegistryVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregatorKey` <a name="ResetAggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetAggregatorKey"></a>

```csharp
private void ResetAggregatorKey()
```

##### `ResetIsFavorite` <a name="ResetIsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetIsFavorite"></a>

```csharp
private void ResetIsFavorite()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetLabels` <a name="ResetLabels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetRegistryVersion` <a name="ResetRegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.resetRegistryVersion"></a>

```csharp
private void ResetRegistryVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.aggregatorKeyInput">AggregatorKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.isFavoriteInput">IsFavoriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.registryVersionInput">RegistryVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata">DataintegrationWorkspaceApplicationRegistryMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregatorKeyInput`<sup>Optional</sup> <a name="AggregatorKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.aggregatorKeyInput"></a>

```csharp
public string AggregatorKeyInput { get; }
```

- *Type:* string

---

##### `IsFavoriteInput`<sup>Optional</sup> <a name="IsFavoriteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.isFavoriteInput"></a>

```csharp
public object IsFavoriteInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `RegistryVersionInput`<sup>Optional</sup> <a name="RegistryVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.registryVersionInput"></a>

```csharp
public double RegistryVersionInput { get; }
```

- *Type:* double

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.aggregatorKey"></a>

```csharp
public string AggregatorKey { get; }
```

- *Type:* string

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.isFavorite"></a>

```csharp
public object IsFavorite { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.registryVersion"></a>

```csharp
public double RegistryVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadataOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationRegistryMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationRegistryMetadata">DataintegrationWorkspaceApplicationRegistryMetadata</a>

---


### DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference <a name="DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.resetApplicationKey">ResetApplicationKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.resetCopyType">ResetCopyType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationKey` <a name="ResetApplicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.resetApplicationKey"></a>

```csharp
private void ResetApplicationKey()
```

##### `ResetCopyType` <a name="ResetCopyType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.resetCopyType"></a>

```csharp
private void ResetCopyType()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.applicationVersion">ApplicationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.lastPatchKey">LastPatchKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.applicationKeyInput">ApplicationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.copyTypeInput">CopyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.applicationKey">ApplicationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.copyType">CopyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo">DataintegrationWorkspaceApplicationSourceApplicationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationVersion`<sup>Required</sup> <a name="ApplicationVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.applicationVersion"></a>

```csharp
public string ApplicationVersion { get; }
```

- *Type:* string

---

##### `LastPatchKey`<sup>Required</sup> <a name="LastPatchKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.lastPatchKey"></a>

```csharp
public string LastPatchKey { get; }
```

- *Type:* string

---

##### `ApplicationKeyInput`<sup>Optional</sup> <a name="ApplicationKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.applicationKeyInput"></a>

```csharp
public string ApplicationKeyInput { get; }
```

- *Type:* string

---

##### `CopyTypeInput`<sup>Optional</sup> <a name="CopyTypeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.copyTypeInput"></a>

```csharp
public string CopyTypeInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.applicationKey"></a>

```csharp
public string ApplicationKey { get; }
```

- *Type:* string

---

##### `CopyType`<sup>Required</sup> <a name="CopyType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.copyType"></a>

```csharp
public string CopyType { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfoOutputReference.property.internalValue"></a>

```csharp
public DataintegrationWorkspaceApplicationSourceApplicationInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationSourceApplicationInfo">DataintegrationWorkspaceApplicationSourceApplicationInfo</a>

---


### DataintegrationWorkspaceApplicationTimeoutsOutputReference <a name="DataintegrationWorkspaceApplicationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataintegrationWorkspaceApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplication.DataintegrationWorkspaceApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



