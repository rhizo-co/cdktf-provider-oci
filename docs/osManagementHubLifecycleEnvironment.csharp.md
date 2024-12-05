# `osManagementHubLifecycleEnvironment` Submodule <a name="`osManagementHubLifecycleEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubLifecycleEnvironment <a name="OsManagementHubLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment oci_os_management_hub_lifecycle_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironment(Construct Scope, string Id, OsManagementHubLifecycleEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig">OsManagementHubLifecycleEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig">OsManagementHubLifecycleEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStages` <a name="PutStages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putStages"></a>

```csharp
private void PutStages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putStages.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(OsManagementHubLifecycleEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubLifecycleEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsManagementHubLifecycleEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsManagementHubLifecycleEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubLifecycleEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubLifecycleEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubLifecycleEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stages">Stages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList">OsManagementHubLifecycleEnvironmentStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference">OsManagementHubLifecycleEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archTypeInput">ArchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamilyInput">OsFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stagesInput">StagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorNameInput">VendorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archType">ArchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorName">VendorName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ManagedInstanceIds`<sup>Required</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.managedInstanceIds"></a>

```csharp
public OsManagementHubLifecycleEnvironmentManagedInstanceIdsList ManagedInstanceIds { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentManagedInstanceIdsList</a>

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stages"></a>

```csharp
public OsManagementHubLifecycleEnvironmentStagesList Stages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList">OsManagementHubLifecycleEnvironmentStagesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeouts"></a>

```csharp
public OsManagementHubLifecycleEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference">OsManagementHubLifecycleEnvironmentTimeoutsOutputReference</a>

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archTypeInput"></a>

```csharp
public string ArchTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamilyInput"></a>

```csharp
public string OsFamilyInput { get; }
```

- *Type:* string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stagesInput"></a>

```csharp
public object StagesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VendorNameInput`<sup>Optional</sup> <a name="VendorNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorNameInput"></a>

```csharp
public string VendorNameInput { get; }
```

- *Type:* string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archType"></a>

```csharp
public string ArchType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorName"></a>

```csharp
public string VendorName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubLifecycleEnvironmentConfig <a name="OsManagementHubLifecycleEnvironmentConfig" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ArchType,
    string CompartmentId,
    string DisplayName,
    string OsFamily,
    object Stages,
    string VendorName,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string Location = null,
    OsManagementHubLifecycleEnvironmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.archType">ArchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#arch_type OsManagementHubLifecycleEnvironment#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.osFamily">OsFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#os_family OsManagementHubLifecycleEnvironment#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.stages">Stages</a></code> | <code>object</code> | stages block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.vendorName">VendorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#vendor_name OsManagementHubLifecycleEnvironment#vendor_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#description OsManagementHubLifecycleEnvironment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#id OsManagementHubLifecycleEnvironment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#location OsManagementHubLifecycleEnvironment#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.archType"></a>

```csharp
public string ArchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#arch_type OsManagementHubLifecycleEnvironment#arch_type}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}.

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.osFamily"></a>

```csharp
public string OsFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#os_family OsManagementHubLifecycleEnvironment#os_family}.

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.stages"></a>

```csharp
public object Stages { get; set; }
```

- *Type:* object

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#stages OsManagementHubLifecycleEnvironment#stages}

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.vendorName"></a>

```csharp
public string VendorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#vendor_name OsManagementHubLifecycleEnvironment#vendor_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#description OsManagementHubLifecycleEnvironment#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#id OsManagementHubLifecycleEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#location OsManagementHubLifecycleEnvironment#location}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.timeouts"></a>

```csharp
public OsManagementHubLifecycleEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#timeouts OsManagementHubLifecycleEnvironment#timeouts}

---

### OsManagementHubLifecycleEnvironmentManagedInstanceIds <a name="OsManagementHubLifecycleEnvironmentManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentManagedInstanceIds {

};
```


### OsManagementHubLifecycleEnvironmentStages <a name="OsManagementHubLifecycleEnvironmentStages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentStages {
    string DisplayName,
    double Rank,
    string CompartmentId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.rank">Rank</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#rank OsManagementHubLifecycleEnvironment#rank}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}.

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.rank"></a>

```csharp
public double Rank { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#rank OsManagementHubLifecycleEnvironment#rank}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}.

---

### OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds <a name="OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds {

};
```


### OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId <a name="OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId {

};
```


### OsManagementHubLifecycleEnvironmentTimeouts <a name="OsManagementHubLifecycleEnvironmentTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#create OsManagementHubLifecycleEnvironment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#delete OsManagementHubLifecycleEnvironment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#update OsManagementHubLifecycleEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#create OsManagementHubLifecycleEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#delete OsManagementHubLifecycleEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#update OsManagementHubLifecycleEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubLifecycleEnvironmentManagedInstanceIdsList <a name="OsManagementHubLifecycleEnvironmentManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentManagedInstanceIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get"></a>

```csharp
private OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference <a name="OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds">OsManagementHubLifecycleEnvironmentManagedInstanceIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubLifecycleEnvironmentManagedInstanceIds InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds">OsManagementHubLifecycleEnvironmentManagedInstanceIds</a>

---


### OsManagementHubLifecycleEnvironmentStagesList <a name="OsManagementHubLifecycleEnvironmentStagesList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.get"></a>

```csharp
private OsManagementHubLifecycleEnvironmentStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList <a name="OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get"></a>

```csharp
private OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference <a name="OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds</a>

---


### OsManagementHubLifecycleEnvironmentStagesOutputReference <a name="OsManagementHubLifecycleEnvironmentStagesOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.archType">ArchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.lifecycleEnvironmentId">LifecycleEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.vendorName">VendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rankInput">RankInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rank">Rank</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.archType"></a>

```csharp
public string ArchType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleEnvironmentId`<sup>Required</sup> <a name="LifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.lifecycleEnvironmentId"></a>

```csharp
public string LifecycleEnvironmentId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedInstanceIds`<sup>Required</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.managedInstanceIds"></a>

```csharp
public OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList ManagedInstanceIds { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList</a>

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.softwareSourceId"></a>

```csharp
public OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList SoftwareSourceId { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.vendorName"></a>

```csharp
public string VendorName { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RankInput`<sup>Optional</sup> <a name="RankInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rankInput"></a>

```csharp
public double RankInput { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rank"></a>

```csharp
public double Rank { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList <a name="OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get"></a>

```csharp
private OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference <a name="OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux"></a>

```csharp
public IResolvable IsMandatoryForAutonomousLinux { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.softwareSourceType"></a>

```csharp
public string SoftwareSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.internalValue"></a>

```csharp
public OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId</a>

---


### OsManagementHubLifecycleEnvironmentTimeoutsOutputReference <a name="OsManagementHubLifecycleEnvironmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsManagementHubLifecycleEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



