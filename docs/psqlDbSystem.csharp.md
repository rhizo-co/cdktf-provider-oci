# `psqlDbSystem` Submodule <a name="`psqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.psqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PsqlDbSystem <a name="PsqlDbSystem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system oci_psql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystem(Construct Scope, string Id, PsqlDbSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig">PsqlDbSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig">PsqlDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails">PutInstancesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy">PutManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails">PutNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations">PutPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails">PutStorageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig">ResetApplyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId">ResetConfigId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs">ResetInstanceMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount">ResetInstanceOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails">ResetInstancesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy">ResetManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations">ResetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType">ResetSystemType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials"></a>

```csharp
private void PutCredentials(PsqlDbSystemCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---

##### `PutInstancesDetails` <a name="PutInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails"></a>

```csharp
private void PutInstancesDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails.parameter.value"></a>

- *Type:* object

---

##### `PutManagementPolicy` <a name="PutManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy"></a>

```csharp
private void PutManagementPolicy(PsqlDbSystemManagementPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---

##### `PutNetworkDetails` <a name="PutNetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails"></a>

```csharp
private void PutNetworkDetails(PsqlDbSystemNetworkDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---

##### `PutPatchOperations` <a name="PutPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations"></a>

```csharp
private void PutPatchOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource"></a>

```csharp
private void PutSource(PsqlDbSystemSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---

##### `PutStorageDetails` <a name="PutStorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails"></a>

```csharp
private void PutStorageDetails(PsqlDbSystemStorageDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(PsqlDbSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

---

##### `ResetApplyConfig` <a name="ResetApplyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig"></a>

```csharp
private void ResetApplyConfig()
```

##### `ResetConfigId` <a name="ResetConfigId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId"></a>

```csharp
private void ResetConfigId()
```

##### `ResetCredentials` <a name="ResetCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetInstanceMemorySizeInGbs` <a name="ResetInstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs"></a>

```csharp
private void ResetInstanceMemorySizeInGbs()
```

##### `ResetInstanceOcpuCount` <a name="ResetInstanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount"></a>

```csharp
private void ResetInstanceOcpuCount()
```

##### `ResetInstancesDetails` <a name="ResetInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails"></a>

```csharp
private void ResetInstancesDetails()
```

##### `ResetManagementPolicy` <a name="ResetManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy"></a>

```csharp
private void ResetManagementPolicy()
```

##### `ResetPatchOperations` <a name="ResetPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations"></a>

```csharp
private void ResetPatchOperations()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSystemType` <a name="ResetSystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType"></a>

```csharp
private void ResetSystemType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

PsqlDbSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

PsqlDbSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

PsqlDbSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

PsqlDbSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PsqlDbSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PsqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PsqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances">Instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails">InstancesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy">ManagementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails">StorageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput">ApplyConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput">InstanceMemorySizeInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput">InstanceOcpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput">InstancesDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput">ManagementPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput">NetworkDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput">PatchOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput">SourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput">StorageDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput">SystemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig">ApplyConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs">InstanceMemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount">InstanceOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType">SystemType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials"></a>

```csharp
public PsqlDbSystemCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a>

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances"></a>

```csharp
public PsqlDbSystemInstancesList Instances { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a>

---

##### `InstancesDetails`<sup>Required</sup> <a name="InstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails"></a>

```csharp
public PsqlDbSystemInstancesDetailsList InstancesDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagementPolicy`<sup>Required</sup> <a name="ManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy"></a>

```csharp
public PsqlDbSystemManagementPolicyOutputReference ManagementPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a>

---

##### `NetworkDetails`<sup>Required</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails"></a>

```csharp
public PsqlDbSystemNetworkDetailsOutputReference NetworkDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a>

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations"></a>

```csharp
public PsqlDbSystemPatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source"></a>

```csharp
public PsqlDbSystemSourceOutputReference Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageDetails`<sup>Required</sup> <a name="StorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails"></a>

```csharp
public PsqlDbSystemStorageDetailsOutputReference StorageDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts"></a>

```csharp
public PsqlDbSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ApplyConfigInput`<sup>Optional</sup> <a name="ApplyConfigInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput"></a>

```csharp
public string ApplyConfigInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput"></a>

```csharp
public PsqlDbSystemCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceMemorySizeInGbsInput`<sup>Optional</sup> <a name="InstanceMemorySizeInGbsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput"></a>

```csharp
public double InstanceMemorySizeInGbsInput { get; }
```

- *Type:* double

---

##### `InstanceOcpuCountInput`<sup>Optional</sup> <a name="InstanceOcpuCountInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput"></a>

```csharp
public double InstanceOcpuCountInput { get; }
```

- *Type:* double

---

##### `InstancesDetailsInput`<sup>Optional</sup> <a name="InstancesDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput"></a>

```csharp
public object InstancesDetailsInput { get; }
```

- *Type:* object

---

##### `ManagementPolicyInput`<sup>Optional</sup> <a name="ManagementPolicyInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput"></a>

```csharp
public PsqlDbSystemManagementPolicy ManagementPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---

##### `NetworkDetailsInput`<sup>Optional</sup> <a name="NetworkDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput"></a>

```csharp
public PsqlDbSystemNetworkDetails NetworkDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---

##### `PatchOperationsInput`<sup>Optional</sup> <a name="PatchOperationsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput"></a>

```csharp
public object PatchOperationsInput { get; }
```

- *Type:* object

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput"></a>

```csharp
public PsqlDbSystemSource SourceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---

##### `StorageDetailsInput`<sup>Optional</sup> <a name="StorageDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput"></a>

```csharp
public PsqlDbSystemStorageDetails StorageDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---

##### `SystemTypeInput`<sup>Optional</sup> <a name="SystemTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput"></a>

```csharp
public string SystemTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplyConfig`<sup>Required</sup> <a name="ApplyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig"></a>

```csharp
public string ApplyConfig { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceMemorySizeInGbs`<sup>Required</sup> <a name="InstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs"></a>

```csharp
public double InstanceMemorySizeInGbs { get; }
```

- *Type:* double

---

##### `InstanceOcpuCount`<sup>Required</sup> <a name="InstanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount"></a>

```csharp
public double InstanceOcpuCount { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType"></a>

```csharp
public string SystemType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PsqlDbSystemConfig <a name="PsqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DbVersion,
    string DisplayName,
    PsqlDbSystemNetworkDetails NetworkDetails,
    string Shape,
    PsqlDbSystemStorageDetails StorageDetails,
    string ApplyConfig = null,
    string ConfigId = null,
    PsqlDbSystemCredentials Credentials = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    double InstanceCount = null,
    double InstanceMemorySizeInGbs = null,
    double InstanceOcpuCount = null,
    object InstancesDetails = null,
    PsqlDbSystemManagementPolicy ManagementPolicy = null,
    object PatchOperations = null,
    PsqlDbSystemSource Source = null,
    string SystemType = null,
    PsqlDbSystemTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion">DbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails">StorageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | storage_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig">ApplyConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId">ConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs">InstanceMemorySizeInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount">InstanceOcpuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails">InstancesDetails</a></code> | <code>object</code> | instances_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy">ManagementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | management_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations">PatchOperations</a></code> | <code>object</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType">SystemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}.

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `NetworkDetails`<sup>Required</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails"></a>

```csharp
public PsqlDbSystemNetworkDetails NetworkDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#network_details PsqlDbSystem#network_details}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}.

---

##### `StorageDetails`<sup>Required</sup> <a name="StorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails"></a>

```csharp
public PsqlDbSystemStorageDetails StorageDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#storage_details PsqlDbSystem#storage_details}

---

##### `ApplyConfig`<sup>Optional</sup> <a name="ApplyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig"></a>

```csharp
public string ApplyConfig { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}.

---

##### `ConfigId`<sup>Optional</sup> <a name="ConfigId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials"></a>

```csharp
public PsqlDbSystemCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#credentials PsqlDbSystem#credentials}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}.

---

##### `InstanceMemorySizeInGbs`<sup>Optional</sup> <a name="InstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs"></a>

```csharp
public double InstanceMemorySizeInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}.

---

##### `InstanceOcpuCount`<sup>Optional</sup> <a name="InstanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount"></a>

```csharp
public double InstanceOcpuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}.

---

##### `InstancesDetails`<sup>Optional</sup> <a name="InstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails"></a>

```csharp
public object InstancesDetails { get; set; }
```

- *Type:* object

instances_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instances_details PsqlDbSystem#instances_details}

---

##### `ManagementPolicy`<sup>Optional</sup> <a name="ManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy"></a>

```csharp
public PsqlDbSystemManagementPolicy ManagementPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

management_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#management_policy PsqlDbSystem#management_policy}

---

##### `PatchOperations`<sup>Optional</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations"></a>

```csharp
public object PatchOperations { get; set; }
```

- *Type:* object

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#patch_operations PsqlDbSystem#patch_operations}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source"></a>

```csharp
public PsqlDbSystemSource Source { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source PsqlDbSystem#source}

---

##### `SystemType`<sup>Optional</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType"></a>

```csharp
public string SystemType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts"></a>

```csharp
public PsqlDbSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#timeouts PsqlDbSystem#timeouts}

---

### PsqlDbSystemCredentials <a name="PsqlDbSystemCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemCredentials {
    PsqlDbSystemCredentialsPasswordDetails PasswordDetails,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails">PasswordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | password_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}. |

---

##### `PasswordDetails`<sup>Required</sup> <a name="PasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails"></a>

```csharp
public PsqlDbSystemCredentialsPasswordDetails PasswordDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

password_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_details PsqlDbSystem#password_details}

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}.

---

### PsqlDbSystemCredentialsPasswordDetails <a name="PsqlDbSystemCredentialsPasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemCredentialsPasswordDetails {
    string PasswordType,
    string Password = null,
    string SecretId = null,
    string SecretVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType">PasswordType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion">SecretVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}. |

---

##### `PasswordType`<sup>Required</sup> <a name="PasswordType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType"></a>

```csharp
public string PasswordType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}.

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}.

---

### PsqlDbSystemInstances <a name="PsqlDbSystemInstances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemInstances {

};
```


### PsqlDbSystemInstancesDetails <a name="PsqlDbSystemInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemInstancesDetails {
    string Description = null,
    string DisplayName = null,
    string PrivateIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}.

---

### PsqlDbSystemManagementPolicy <a name="PsqlDbSystemManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemManagementPolicy {
    PsqlDbSystemManagementPolicyBackupPolicy BackupPolicy = null,
    string MaintenanceWindowStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}. |

---

##### `BackupPolicy`<sup>Optional</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy"></a>

```csharp
public PsqlDbSystemManagementPolicyBackupPolicy BackupPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_policy PsqlDbSystem#backup_policy}

---

##### `MaintenanceWindowStart`<sup>Optional</sup> <a name="MaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart"></a>

```csharp
public string MaintenanceWindowStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}.

---

### PsqlDbSystemManagementPolicyBackupPolicy <a name="PsqlDbSystemManagementPolicyBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemManagementPolicyBackupPolicy {
    string BackupStart = null,
    double[] DaysOfTheMonth = null,
    string[] DaysOfTheWeek = null,
    string Kind = null,
    double RetentionDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart">BackupStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth">DaysOfTheMonth</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek">DaysOfTheWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays">RetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}. |

---

##### `BackupStart`<sup>Optional</sup> <a name="BackupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart"></a>

```csharp
public string BackupStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}.

---

##### `DaysOfTheMonth`<sup>Optional</sup> <a name="DaysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth"></a>

```csharp
public double[] DaysOfTheMonth { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}.

---

##### `DaysOfTheWeek`<sup>Optional</sup> <a name="DaysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek"></a>

```csharp
public string[] DaysOfTheWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}.

---

### PsqlDbSystemNetworkDetails <a name="PsqlDbSystemNetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemNetworkDetails {
    string SubnetId,
    string[] NsgIds = null,
    string PrimaryDbEndpointPrivateIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp">PrimaryDbEndpointPrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}.

---

##### `PrimaryDbEndpointPrivateIp`<sup>Optional</sup> <a name="PrimaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp"></a>

```csharp
public string PrimaryDbEndpointPrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}.

---

### PsqlDbSystemPatchOperations <a name="PsqlDbSystemPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemPatchOperations {
    string Operation,
    string Selection,
    string From = null,
    string Position = null,
    string SelectedItem = null,
    System.Collections.Generic.IDictionary<string, string> Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation">Operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection">Selection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position">Position</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem">SelectedItem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value">Value</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}. |

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}.

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection"></a>

```csharp
public string Selection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}.

---

##### `From`<sup>Optional</sup> <a name="From" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position"></a>

```csharp
public string Position { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}.

---

##### `SelectedItem`<sup>Optional</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem"></a>

```csharp
public string SelectedItem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Value { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}.

---

### PsqlDbSystemSource <a name="PsqlDbSystemSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemSource {
    string SourceType,
    string BackupId = null,
    object IsHavingRestoreConfigOverrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides">IsHavingRestoreConfigOverrides</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}.

---

##### `IsHavingRestoreConfigOverrides`<sup>Optional</sup> <a name="IsHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides"></a>

```csharp
public object IsHavingRestoreConfigOverrides { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}.

---

### PsqlDbSystemStorageDetails <a name="PsqlDbSystemStorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemStorageDetails {
    object IsRegionallyDurable,
    string SystemType,
    string AvailabilityDomain = null,
    string Iops = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable">IsRegionallyDurable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType">SystemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops">Iops</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}. |

---

##### `IsRegionallyDurable`<sup>Required</sup> <a name="IsRegionallyDurable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable"></a>

```csharp
public object IsRegionallyDurable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}.

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType"></a>

```csharp
public string SystemType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops"></a>

```csharp
public string Iops { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}.

---

### PsqlDbSystemTimeouts <a name="PsqlDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PsqlDbSystemCredentialsOutputReference <a name="PsqlDbSystemCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails">PutPasswordDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPasswordDetails` <a name="PutPasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails"></a>

```csharp
private void PutPasswordDetails(PsqlDbSystemCredentialsPasswordDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails">PasswordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput">PasswordDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordDetails`<sup>Required</sup> <a name="PasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails"></a>

```csharp
public PsqlDbSystemCredentialsPasswordDetailsOutputReference PasswordDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a>

---

##### `PasswordDetailsInput`<sup>Optional</sup> <a name="PasswordDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput"></a>

```csharp
public PsqlDbSystemCredentialsPasswordDetails PasswordDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue"></a>

```csharp
public PsqlDbSystemCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---


### PsqlDbSystemCredentialsPasswordDetailsOutputReference <a name="PsqlDbSystemCredentialsPasswordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemCredentialsPasswordDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion"></a>

```csharp
private void ResetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput">PasswordTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType">PasswordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PasswordTypeInput`<sup>Optional</sup> <a name="PasswordTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput"></a>

```csharp
public string PasswordTypeInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordType`<sup>Required</sup> <a name="PasswordType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType"></a>

```csharp
public string PasswordType { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue"></a>

```csharp
public PsqlDbSystemCredentialsPasswordDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---


### PsqlDbSystemInstancesDetailsList <a name="PsqlDbSystemInstancesDetailsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemInstancesDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get"></a>

```csharp
private PsqlDbSystemInstancesDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PsqlDbSystemInstancesDetailsOutputReference <a name="PsqlDbSystemInstancesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemInstancesDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PsqlDbSystemInstancesList <a name="PsqlDbSystemInstancesList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemInstancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get"></a>

```csharp
private PsqlDbSystemInstancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PsqlDbSystemInstancesOutputReference <a name="PsqlDbSystemInstancesOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue"></a>

```csharp
public PsqlDbSystemInstances InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a>

---


### PsqlDbSystemManagementPolicyBackupPolicyOutputReference <a name="PsqlDbSystemManagementPolicyBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemManagementPolicyBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart">ResetBackupStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth">ResetDaysOfTheMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek">ResetDaysOfTheWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupStart` <a name="ResetBackupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart"></a>

```csharp
private void ResetBackupStart()
```

##### `ResetDaysOfTheMonth` <a name="ResetDaysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth"></a>

```csharp
private void ResetDaysOfTheMonth()
```

##### `ResetDaysOfTheWeek` <a name="ResetDaysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek"></a>

```csharp
private void ResetDaysOfTheWeek()
```

##### `ResetKind` <a name="ResetKind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays"></a>

```csharp
private void ResetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput">BackupStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput">DaysOfTheMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput">DaysOfTheWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart">BackupStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth">DaysOfTheMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek">DaysOfTheWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupStartInput`<sup>Optional</sup> <a name="BackupStartInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput"></a>

```csharp
public string BackupStartInput { get; }
```

- *Type:* string

---

##### `DaysOfTheMonthInput`<sup>Optional</sup> <a name="DaysOfTheMonthInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput"></a>

```csharp
public double[] DaysOfTheMonthInput { get; }
```

- *Type:* double[]

---

##### `DaysOfTheWeekInput`<sup>Optional</sup> <a name="DaysOfTheWeekInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput"></a>

```csharp
public string[] DaysOfTheWeekInput { get; }
```

- *Type:* string[]

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `BackupStart`<sup>Required</sup> <a name="BackupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart"></a>

```csharp
public string BackupStart { get; }
```

- *Type:* string

---

##### `DaysOfTheMonth`<sup>Required</sup> <a name="DaysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth"></a>

```csharp
public double[] DaysOfTheMonth { get; }
```

- *Type:* double[]

---

##### `DaysOfTheWeek`<sup>Required</sup> <a name="DaysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek"></a>

```csharp
public string[] DaysOfTheWeek { get; }
```

- *Type:* string[]

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public PsqlDbSystemManagementPolicyBackupPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---


### PsqlDbSystemManagementPolicyOutputReference <a name="PsqlDbSystemManagementPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemManagementPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy">PutBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy">ResetBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart">ResetMaintenanceWindowStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupPolicy` <a name="PutBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy"></a>

```csharp
private void PutBackupPolicy(PsqlDbSystemManagementPolicyBackupPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---

##### `ResetBackupPolicy` <a name="ResetBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy"></a>

```csharp
private void ResetBackupPolicy()
```

##### `ResetMaintenanceWindowStart` <a name="ResetMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart"></a>

```csharp
private void ResetMaintenanceWindowStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput">BackupPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput">MaintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy"></a>

```csharp
public PsqlDbSystemManagementPolicyBackupPolicyOutputReference BackupPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a>

---

##### `BackupPolicyInput`<sup>Optional</sup> <a name="BackupPolicyInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput"></a>

```csharp
public PsqlDbSystemManagementPolicyBackupPolicy BackupPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---

##### `MaintenanceWindowStartInput`<sup>Optional</sup> <a name="MaintenanceWindowStartInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput"></a>

```csharp
public string MaintenanceWindowStartInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowStart`<sup>Required</sup> <a name="MaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart"></a>

```csharp
public string MaintenanceWindowStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue"></a>

```csharp
public PsqlDbSystemManagementPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---


### PsqlDbSystemNetworkDetailsOutputReference <a name="PsqlDbSystemNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemNetworkDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp">ResetPrimaryDbEndpointPrivateIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPrimaryDbEndpointPrivateIp` <a name="ResetPrimaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp"></a>

```csharp
private void ResetPrimaryDbEndpointPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput">PrimaryDbEndpointPrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp">PrimaryDbEndpointPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PrimaryDbEndpointPrivateIpInput`<sup>Optional</sup> <a name="PrimaryDbEndpointPrivateIpInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput"></a>

```csharp
public string PrimaryDbEndpointPrivateIpInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrimaryDbEndpointPrivateIp`<sup>Required</sup> <a name="PrimaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp"></a>

```csharp
public string PrimaryDbEndpointPrivateIp { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue"></a>

```csharp
public PsqlDbSystemNetworkDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---


### PsqlDbSystemPatchOperationsList <a name="PsqlDbSystemPatchOperationsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemPatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get"></a>

```csharp
private PsqlDbSystemPatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PsqlDbSystemPatchOperationsOutputReference <a name="PsqlDbSystemPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemPatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem">ResetSelectedItem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetPosition` <a name="ResetPosition" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetSelectedItem` <a name="ResetSelectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem"></a>

```csharp
private void ResetSelectedItem()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput">PositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput">SelectedItemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput">SelectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput">ValueInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value">Value</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput"></a>

```csharp
public string PositionInput { get; }
```

- *Type:* string

---

##### `SelectedItemInput`<sup>Optional</sup> <a name="SelectedItemInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput"></a>

```csharp
public string SelectedItemInput { get; }
```

- *Type:* string

---

##### `SelectionInput`<sup>Optional</sup> <a name="SelectionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput"></a>

```csharp
public string SelectionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem"></a>

```csharp
public string SelectedItem { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Value { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PsqlDbSystemSourceOutputReference <a name="PsqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides">ResetIsHavingRestoreConfigOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupId` <a name="ResetBackupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetIsHavingRestoreConfigOverrides` <a name="ResetIsHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides"></a>

```csharp
private void ResetIsHavingRestoreConfigOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput">IsHavingRestoreConfigOverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides">IsHavingRestoreConfigOverrides</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `IsHavingRestoreConfigOverridesInput`<sup>Optional</sup> <a name="IsHavingRestoreConfigOverridesInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput"></a>

```csharp
public object IsHavingRestoreConfigOverridesInput { get; }
```

- *Type:* object

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `IsHavingRestoreConfigOverrides`<sup>Required</sup> <a name="IsHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides"></a>

```csharp
public object IsHavingRestoreConfigOverrides { get; }
```

- *Type:* object

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue"></a>

```csharp
public PsqlDbSystemSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---


### PsqlDbSystemStorageDetailsOutputReference <a name="PsqlDbSystemStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemStorageDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops">ResetIops</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetIops` <a name="ResetIops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput">IopsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput">IsRegionallyDurableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput">SystemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops">Iops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable">IsRegionallyDurable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType">SystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput"></a>

```csharp
public string IopsInput { get; }
```

- *Type:* string

---

##### `IsRegionallyDurableInput`<sup>Optional</sup> <a name="IsRegionallyDurableInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput"></a>

```csharp
public object IsRegionallyDurableInput { get; }
```

- *Type:* object

---

##### `SystemTypeInput`<sup>Optional</sup> <a name="SystemTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput"></a>

```csharp
public string SystemTypeInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops"></a>

```csharp
public string Iops { get; }
```

- *Type:* string

---

##### `IsRegionallyDurable`<sup>Required</sup> <a name="IsRegionallyDurable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable"></a>

```csharp
public object IsRegionallyDurable { get; }
```

- *Type:* object

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType"></a>

```csharp
public string SystemType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue"></a>

```csharp
public PsqlDbSystemStorageDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---


### PsqlDbSystemTimeoutsOutputReference <a name="PsqlDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new PsqlDbSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



