# `capacityManagementOccCustomerGroup` Submodule <a name="`capacityManagementOccCustomerGroup` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccCustomerGroup <a name="CapacityManagementOccCustomerGroup" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group oci_capacity_management_occ_customer_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroup(Construct Scope, string Id, CapacityManagementOccCustomerGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig">CapacityManagementOccCustomerGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig">CapacityManagementOccCustomerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putCustomersList">PutCustomersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetCustomersList">ResetCustomersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetLifecycleDetails">ResetLifecycleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomersList` <a name="PutCustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putCustomersList"></a>

```csharp
private void PutCustomersList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putCustomersList.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(CapacityManagementOccCustomerGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a>

---

##### `ResetCustomersList` <a name="ResetCustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetCustomersList"></a>

```csharp
private void ResetCustomersList()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifecycleDetails` <a name="ResetLifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetLifecycleDetails"></a>

```csharp
private void ResetLifecycleDetails()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccCustomerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCustomerGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCustomerGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCustomerGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCustomerGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CapacityManagementOccCustomerGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CapacityManagementOccCustomerGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CapacityManagementOccCustomerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccCustomerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersList">CustomersList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList">CapacityManagementOccCustomerGroupCustomersListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference">CapacityManagementOccCustomerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersListInput">CustomersListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetailsInput">LifecycleDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomersList`<sup>Required</sup> <a name="CustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersList"></a>

```csharp
public CapacityManagementOccCustomerGroupCustomersListStructList CustomersList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList">CapacityManagementOccCustomerGroupCustomersListStructList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeouts"></a>

```csharp
public CapacityManagementOccCustomerGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference">CapacityManagementOccCustomerGroupTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CustomersListInput`<sup>Optional</sup> <a name="CustomersListInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersListInput"></a>

```csharp
public object CustomersListInput { get; }
```

- *Type:* object

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleDetailsInput`<sup>Optional</sup> <a name="LifecycleDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetailsInput"></a>

```csharp
public string LifecycleDetailsInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccCustomerGroupConfig <a name="CapacityManagementOccCustomerGroupConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    object CustomersList = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string LifecycleDetails = null,
    string Status = null,
    CapacityManagementOccCustomerGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#compartment_id CapacityManagementOccCustomerGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.customersList">CustomersList</a></code> | <code>object</code> | customers_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#defined_tags CapacityManagementOccCustomerGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#freeform_tags CapacityManagementOccCustomerGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#id CapacityManagementOccCustomerGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#lifecycle_details CapacityManagementOccCustomerGroup#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#compartment_id CapacityManagementOccCustomerGroup#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}.

---

##### `CustomersList`<sup>Optional</sup> <a name="CustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.customersList"></a>

```csharp
public object CustomersList { get; set; }
```

- *Type:* object

customers_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#customers_list CapacityManagementOccCustomerGroup#customers_list}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#defined_tags CapacityManagementOccCustomerGroup#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#freeform_tags CapacityManagementOccCustomerGroup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#id CapacityManagementOccCustomerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleDetails`<sup>Optional</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#lifecycle_details CapacityManagementOccCustomerGroup#lifecycle_details}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.timeouts"></a>

```csharp
public CapacityManagementOccCustomerGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#timeouts CapacityManagementOccCustomerGroup#timeouts}

---

### CapacityManagementOccCustomerGroupCustomersListStruct <a name="CapacityManagementOccCustomerGroupCustomersListStruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupCustomersListStruct {
    string DisplayName,
    string TenancyId,
    string Description = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.tenancyId">TenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#tenancy_id CapacityManagementOccCustomerGroup#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.tenancyId"></a>

```csharp
public string TenancyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#tenancy_id CapacityManagementOccCustomerGroup#tenancy_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}.

---

### CapacityManagementOccCustomerGroupTimeouts <a name="CapacityManagementOccCustomerGroupTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#create CapacityManagementOccCustomerGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#delete CapacityManagementOccCustomerGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#update CapacityManagementOccCustomerGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#create CapacityManagementOccCustomerGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#delete CapacityManagementOccCustomerGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#update CapacityManagementOccCustomerGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccCustomerGroupCustomersListStructList <a name="CapacityManagementOccCustomerGroupCustomersListStructList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupCustomersListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.get"></a>

```csharp
private CapacityManagementOccCustomerGroupCustomersListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CapacityManagementOccCustomerGroupCustomersListStructOutputReference <a name="CapacityManagementOccCustomerGroupCustomersListStructOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupCustomersListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyIdInput">TenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyId">TenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyIdInput"></a>

```csharp
public string TenancyIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyId"></a>

```csharp
public string TenancyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CapacityManagementOccCustomerGroupTimeoutsOutputReference <a name="CapacityManagementOccCustomerGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



