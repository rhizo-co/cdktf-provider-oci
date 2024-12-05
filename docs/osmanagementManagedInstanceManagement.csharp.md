# `osmanagementManagedInstanceManagement` Submodule <a name="`osmanagementManagedInstanceManagement` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementManagedInstanceManagement <a name="OsmanagementManagedInstanceManagement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management oci_osmanagement_managed_instance_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagement(Construct Scope, string Id, OsmanagementManagedInstanceManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig">OsmanagementManagedInstanceManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig">OsmanagementManagedInstanceManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources">PutChildSoftwareSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups">PutManagedInstanceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource">PutParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetChildSoftwareSources">ResetChildSoftwareSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetManagedInstanceGroups">ResetManagedInstanceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetParentSoftwareSource">ResetParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutChildSoftwareSources` <a name="PutChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources"></a>

```csharp
private void PutChildSoftwareSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources.parameter.value"></a>

- *Type:* object

---

##### `PutManagedInstanceGroups` <a name="PutManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups"></a>

```csharp
private void PutManagedInstanceGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups.parameter.value"></a>

- *Type:* object

---

##### `PutParentSoftwareSource` <a name="PutParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource"></a>

```csharp
private void PutParentSoftwareSource(OsmanagementManagedInstanceManagementParentSoftwareSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OsmanagementManagedInstanceManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

---

##### `ResetChildSoftwareSources` <a name="ResetChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetChildSoftwareSources"></a>

```csharp
private void ResetChildSoftwareSources()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedInstanceGroups` <a name="ResetManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetManagedInstanceGroups"></a>

```csharp
private void ResetManagedInstanceGroups()
```

##### `ResetParentSoftwareSource` <a name="ResetParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetParentSoftwareSource"></a>

```csharp
private void ResetParentSoftwareSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsmanagementManagedInstanceManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsmanagementManagedInstanceManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsmanagementManagedInstanceManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsmanagementManagedInstanceManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OsmanagementManagedInstanceManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OsmanagementManagedInstanceManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsmanagementManagedInstanceManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsmanagementManagedInstanceManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementManagedInstanceManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSources">ChildSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList">OsmanagementManagedInstanceManagementChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastBoot">LastBoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastCheckin">LastCheckin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroups">ManagedInstanceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList">OsmanagementManagedInstanceManagementManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osKernelVersion">OsKernelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osName">OsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSource">ParentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference">OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference">OsmanagementManagedInstanceManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.updatesAvailable">UpdatesAvailable</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSourcesInput">ChildSoftwareSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroupsInput">ManagedInstanceGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSourceInput">ParentSoftwareSourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ChildSoftwareSources`<sup>Required</sup> <a name="ChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSources"></a>

```csharp
public OsmanagementManagedInstanceManagementChildSoftwareSourcesList ChildSoftwareSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList">OsmanagementManagedInstanceManagementChildSoftwareSourcesList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LastBoot`<sup>Required</sup> <a name="LastBoot" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastBoot"></a>

```csharp
public string LastBoot { get; }
```

- *Type:* string

---

##### `LastCheckin`<sup>Required</sup> <a name="LastCheckin" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastCheckin"></a>

```csharp
public string LastCheckin { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroups`<sup>Required</sup> <a name="ManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroups"></a>

```csharp
public OsmanagementManagedInstanceManagementManagedInstanceGroupsList ManagedInstanceGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList">OsmanagementManagedInstanceManagementManagedInstanceGroupsList</a>

---

##### `OsKernelVersion`<sup>Required</sup> <a name="OsKernelVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osKernelVersion"></a>

```csharp
public string OsKernelVersion { get; }
```

- *Type:* string

---

##### `OsName`<sup>Required</sup> <a name="OsName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osName"></a>

```csharp
public string OsName { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `ParentSoftwareSource`<sup>Required</sup> <a name="ParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSource"></a>

```csharp
public OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference ParentSoftwareSource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference">OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeouts"></a>

```csharp
public OsmanagementManagedInstanceManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference">OsmanagementManagedInstanceManagementTimeoutsOutputReference</a>

---

##### `UpdatesAvailable`<sup>Required</sup> <a name="UpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.updatesAvailable"></a>

```csharp
public double UpdatesAvailable { get; }
```

- *Type:* double

---

##### `ChildSoftwareSourcesInput`<sup>Optional</sup> <a name="ChildSoftwareSourcesInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSourcesInput"></a>

```csharp
public object ChildSoftwareSourcesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupsInput`<sup>Optional</sup> <a name="ManagedInstanceGroupsInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroupsInput"></a>

```csharp
public object ManagedInstanceGroupsInput { get; }
```

- *Type:* object

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `ParentSoftwareSourceInput`<sup>Optional</sup> <a name="ParentSoftwareSourceInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSourceInput"></a>

```csharp
public OsmanagementManagedInstanceManagementParentSoftwareSource ParentSoftwareSourceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementManagedInstanceManagementChildSoftwareSources <a name="OsmanagementManagedInstanceManagementChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementChildSoftwareSources {
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}.

---

### OsmanagementManagedInstanceManagementConfig <a name="OsmanagementManagedInstanceManagementConfig" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    object ChildSoftwareSources = null,
    string Id = null,
    object ManagedInstanceGroups = null,
    OsmanagementManagedInstanceManagementParentSoftwareSource ParentSoftwareSource = null,
    OsmanagementManagedInstanceManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.childSoftwareSources">ChildSoftwareSources</a></code> | <code>object</code> | child_software_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceGroups">ManagedInstanceGroups</a></code> | <code>object</code> | managed_instance_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.parentSoftwareSource">ParentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | parent_software_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}.

---

##### `ChildSoftwareSources`<sup>Optional</sup> <a name="ChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.childSoftwareSources"></a>

```csharp
public object ChildSoftwareSources { get; set; }
```

- *Type:* object

child_software_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#child_software_sources OsmanagementManagedInstanceManagement#child_software_sources}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedInstanceGroups`<sup>Optional</sup> <a name="ManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceGroups"></a>

```csharp
public object ManagedInstanceGroups { get; set; }
```

- *Type:* object

managed_instance_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_groups OsmanagementManagedInstanceManagement#managed_instance_groups}

---

##### `ParentSoftwareSource`<sup>Optional</sup> <a name="ParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.parentSoftwareSource"></a>

```csharp
public OsmanagementManagedInstanceManagementParentSoftwareSource ParentSoftwareSource { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

parent_software_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#parent_software_source OsmanagementManagedInstanceManagement#parent_software_source}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.timeouts"></a>

```csharp
public OsmanagementManagedInstanceManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#timeouts OsmanagementManagedInstanceManagement#timeouts}

---

### OsmanagementManagedInstanceManagementManagedInstanceGroups <a name="OsmanagementManagedInstanceManagementManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementManagedInstanceGroups {
    string DisplayName = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#display_name OsmanagementManagedInstanceManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#display_name OsmanagementManagedInstanceManagement#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OsmanagementManagedInstanceManagementParentSoftwareSource <a name="OsmanagementManagedInstanceManagementParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementParentSoftwareSource {
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}.

---

### OsmanagementManagedInstanceManagementTimeouts <a name="OsmanagementManagedInstanceManagementTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementManagedInstanceManagementChildSoftwareSourcesList <a name="OsmanagementManagedInstanceManagementChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementChildSoftwareSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get"></a>

```csharp
private OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference <a name="OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsmanagementManagedInstanceManagementManagedInstanceGroupsList <a name="OsmanagementManagedInstanceManagementManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementManagedInstanceGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get"></a>

```csharp
private OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference <a name="OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference <a name="OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.internalValue"></a>

```csharp
public OsmanagementManagedInstanceManagementParentSoftwareSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---


### OsmanagementManagedInstanceManagementTimeoutsOutputReference <a name="OsmanagementManagedInstanceManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OsmanagementManagedInstanceManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



