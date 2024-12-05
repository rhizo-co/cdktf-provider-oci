# `capacityManagementOccCustomerGroupOccCustomer` Submodule <a name="`capacityManagementOccCustomerGroupOccCustomer` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccCustomerGroupOccCustomer <a name="CapacityManagementOccCustomerGroupOccCustomer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer oci_capacity_management_occ_customer_group_occ_customer}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupOccCustomer(Construct Scope, string Id, CapacityManagementOccCustomerGroupOccCustomerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig">CapacityManagementOccCustomerGroupOccCustomerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig">CapacityManagementOccCustomerGroupOccCustomerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.putTimeouts"></a>

```csharp
private void PutTimeouts(CapacityManagementOccCustomerGroupOccCustomerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts">CapacityManagementOccCustomerGroupOccCustomerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccCustomerGroupOccCustomer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCustomerGroupOccCustomer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCustomerGroupOccCustomer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCustomerGroupOccCustomer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccCustomerGroupOccCustomer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CapacityManagementOccCustomerGroupOccCustomer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CapacityManagementOccCustomerGroupOccCustomer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CapacityManagementOccCustomerGroupOccCustomer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccCustomerGroupOccCustomer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference">CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.occCustomerGroupIdInput">OccCustomerGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tenancyIdInput">TenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tenancyId">TenancyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.timeouts"></a>

```csharp
public CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference">CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OccCustomerGroupIdInput`<sup>Optional</sup> <a name="OccCustomerGroupIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.occCustomerGroupIdInput"></a>

```csharp
public string OccCustomerGroupIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tenancyIdInput"></a>

```csharp
public string TenancyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tenancyId"></a>

```csharp
public string TenancyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccCustomerGroupOccCustomerConfig <a name="CapacityManagementOccCustomerGroupOccCustomerConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupOccCustomerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string OccCustomerGroupId,
    string TenancyId,
    string Description = null,
    string Id = null,
    string Status = null,
    CapacityManagementOccCustomerGroupOccCustomerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#display_name CapacityManagementOccCustomerGroupOccCustomer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#occ_customer_group_id CapacityManagementOccCustomerGroupOccCustomer#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.tenancyId">TenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#tenancy_id CapacityManagementOccCustomerGroupOccCustomer#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#description CapacityManagementOccCustomerGroupOccCustomer#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#id CapacityManagementOccCustomerGroupOccCustomer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#status CapacityManagementOccCustomerGroupOccCustomer#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts">CapacityManagementOccCustomerGroupOccCustomerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#display_name CapacityManagementOccCustomerGroupOccCustomer#display_name}.

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#occ_customer_group_id CapacityManagementOccCustomerGroupOccCustomer#occ_customer_group_id}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.tenancyId"></a>

```csharp
public string TenancyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#tenancy_id CapacityManagementOccCustomerGroupOccCustomer#tenancy_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#description CapacityManagementOccCustomerGroupOccCustomer#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#id CapacityManagementOccCustomerGroupOccCustomer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#status CapacityManagementOccCustomerGroupOccCustomer#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.timeouts"></a>

```csharp
public CapacityManagementOccCustomerGroupOccCustomerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts">CapacityManagementOccCustomerGroupOccCustomerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#timeouts CapacityManagementOccCustomerGroupOccCustomer#timeouts}

---

### CapacityManagementOccCustomerGroupOccCustomerTimeouts <a name="CapacityManagementOccCustomerGroupOccCustomerTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupOccCustomerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#create CapacityManagementOccCustomerGroupOccCustomer#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#delete CapacityManagementOccCustomerGroupOccCustomer#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#update CapacityManagementOccCustomerGroupOccCustomer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#create CapacityManagementOccCustomerGroupOccCustomer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#delete CapacityManagementOccCustomerGroupOccCustomer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#update CapacityManagementOccCustomerGroupOccCustomer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference <a name="CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



