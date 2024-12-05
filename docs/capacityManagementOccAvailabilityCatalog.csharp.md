# `capacityManagementOccAvailabilityCatalog` Submodule <a name="`capacityManagementOccAvailabilityCatalog` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccAvailabilityCatalog <a name="CapacityManagementOccAvailabilityCatalog" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog oci_capacity_management_occ_availability_catalog}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccAvailabilityCatalog(Construct Scope, string Id, CapacityManagementOccAvailabilityCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig">CapacityManagementOccAvailabilityCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig">CapacityManagementOccAvailabilityCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putMetadataDetails">PutMetadataDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetMetadataDetails">ResetMetadataDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadataDetails` <a name="PutMetadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putMetadataDetails"></a>

```csharp
private void PutMetadataDetails(CapacityManagementOccAvailabilityCatalogMetadataDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putMetadataDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts"></a>

```csharp
private void PutTimeouts(CapacityManagementOccAvailabilityCatalogTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadataDetails` <a name="ResetMetadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetMetadataDetails"></a>

```csharp
private void ResetMetadataDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccAvailabilityCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccAvailabilityCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccAvailabilityCatalog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CapacityManagementOccAvailabilityCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CapacityManagementOccAvailabilityCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CapacityManagementOccAvailabilityCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccAvailabilityCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.catalogState">CatalogState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList">CapacityManagementOccAvailabilityCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetails">MetadataDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference">CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference">CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetailsInput">Base64EncodedCatalogDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetailsInput">MetadataDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupIdInput">OccCustomerGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails">Base64EncodedCatalogDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CatalogState`<sup>Required</sup> <a name="CatalogState" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.catalogState"></a>

```csharp
public string CatalogState { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.details"></a>

```csharp
public CapacityManagementOccAvailabilityCatalogDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList">CapacityManagementOccAvailabilityCatalogDetailsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MetadataDetails`<sup>Required</sup> <a name="MetadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetails"></a>

```csharp
public CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference MetadataDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference">CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeouts"></a>

```csharp
public CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference">CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Base64EncodedCatalogDetailsInput`<sup>Optional</sup> <a name="Base64EncodedCatalogDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetailsInput"></a>

```csharp
public string Base64EncodedCatalogDetailsInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataDetailsInput`<sup>Optional</sup> <a name="MetadataDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetailsInput"></a>

```csharp
public CapacityManagementOccAvailabilityCatalogMetadataDetails MetadataDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OccCustomerGroupIdInput`<sup>Optional</sup> <a name="OccCustomerGroupIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupIdInput"></a>

```csharp
public string OccCustomerGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Base64EncodedCatalogDetails`<sup>Required</sup> <a name="Base64EncodedCatalogDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails"></a>

```csharp
public string Base64EncodedCatalogDetails { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccAvailabilityCatalogConfig <a name="CapacityManagementOccAvailabilityCatalogConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccAvailabilityCatalogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Base64EncodedCatalogDetails,
    string CompartmentId,
    string DisplayName,
    string Namespace,
    string OccCustomerGroupId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    CapacityManagementOccAvailabilityCatalogMetadataDetails MetadataDetails = null,
    CapacityManagementOccAvailabilityCatalogTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.base64EncodedCatalogDetails">Base64EncodedCatalogDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#base64encoded_catalog_details CapacityManagementOccAvailabilityCatalog#base64encoded_catalog_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#compartment_id CapacityManagementOccAvailabilityCatalog#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#display_name CapacityManagementOccAvailabilityCatalog#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#namespace CapacityManagementOccAvailabilityCatalog#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#occ_customer_group_id CapacityManagementOccAvailabilityCatalog#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#defined_tags CapacityManagementOccAvailabilityCatalog#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#description CapacityManagementOccAvailabilityCatalog#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#freeform_tags CapacityManagementOccAvailabilityCatalog#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#id CapacityManagementOccAvailabilityCatalog#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.metadataDetails">MetadataDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | metadata_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Base64EncodedCatalogDetails`<sup>Required</sup> <a name="Base64EncodedCatalogDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.base64EncodedCatalogDetails"></a>

```csharp
public string Base64EncodedCatalogDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#base64encoded_catalog_details CapacityManagementOccAvailabilityCatalog#base64encoded_catalog_details}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#compartment_id CapacityManagementOccAvailabilityCatalog#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#display_name CapacityManagementOccAvailabilityCatalog#display_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#namespace CapacityManagementOccAvailabilityCatalog#namespace}.

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#occ_customer_group_id CapacityManagementOccAvailabilityCatalog#occ_customer_group_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#defined_tags CapacityManagementOccAvailabilityCatalog#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#description CapacityManagementOccAvailabilityCatalog#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#freeform_tags CapacityManagementOccAvailabilityCatalog#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#id CapacityManagementOccAvailabilityCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetadataDetails`<sup>Optional</sup> <a name="MetadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.metadataDetails"></a>

```csharp
public CapacityManagementOccAvailabilityCatalogMetadataDetails MetadataDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

metadata_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#metadata_details CapacityManagementOccAvailabilityCatalog#metadata_details}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.timeouts"></a>

```csharp
public CapacityManagementOccAvailabilityCatalogTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#timeouts CapacityManagementOccAvailabilityCatalog#timeouts}

---

### CapacityManagementOccAvailabilityCatalogDetails <a name="CapacityManagementOccAvailabilityCatalogDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccAvailabilityCatalogDetails {

};
```


### CapacityManagementOccAvailabilityCatalogMetadataDetails <a name="CapacityManagementOccAvailabilityCatalogMetadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccAvailabilityCatalogMetadataDetails {
    string FormatVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails.property.formatVersion">FormatVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#format_version CapacityManagementOccAvailabilityCatalog#format_version}. |

---

##### `FormatVersion`<sup>Required</sup> <a name="FormatVersion" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails.property.formatVersion"></a>

```csharp
public string FormatVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#format_version CapacityManagementOccAvailabilityCatalog#format_version}.

---

### CapacityManagementOccAvailabilityCatalogTimeouts <a name="CapacityManagementOccAvailabilityCatalogTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccAvailabilityCatalogTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#create CapacityManagementOccAvailabilityCatalog#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#delete CapacityManagementOccAvailabilityCatalog#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#update CapacityManagementOccAvailabilityCatalog#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#create CapacityManagementOccAvailabilityCatalog#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#delete CapacityManagementOccAvailabilityCatalog#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#update CapacityManagementOccAvailabilityCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccAvailabilityCatalogDetailsList <a name="CapacityManagementOccAvailabilityCatalogDetailsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccAvailabilityCatalogDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.get"></a>

```csharp
private CapacityManagementOccAvailabilityCatalogDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CapacityManagementOccAvailabilityCatalogDetailsOutputReference <a name="CapacityManagementOccAvailabilityCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccAvailabilityCatalogDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity">AvailableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover">DateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder">DateFinalCustomerOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity">DemandedQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity">TotalAvailableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails">CapacityManagementOccAvailabilityCatalogDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableQuantity`<sup>Required</sup> <a name="AvailableQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity"></a>

```csharp
public string AvailableQuantity { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DateExpectedCapacityHandover`<sup>Required</sup> <a name="DateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover"></a>

```csharp
public string DateExpectedCapacityHandover { get; }
```

- *Type:* string

---

##### `DateFinalCustomerOrder`<sup>Required</sup> <a name="DateFinalCustomerOrder" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder"></a>

```csharp
public string DateFinalCustomerOrder { get; }
```

- *Type:* string

---

##### `DemandedQuantity`<sup>Required</sup> <a name="DemandedQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity"></a>

```csharp
public string DemandedQuantity { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TotalAvailableQuantity`<sup>Required</sup> <a name="TotalAvailableQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity"></a>

```csharp
public string TotalAvailableQuantity { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue"></a>

```csharp
public CapacityManagementOccAvailabilityCatalogDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails">CapacityManagementOccAvailabilityCatalogDetails</a>

---


### CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference <a name="CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersionInput">FormatVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion">FormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FormatVersionInput`<sup>Optional</sup> <a name="FormatVersionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersionInput"></a>

```csharp
public string FormatVersionInput { get; }
```

- *Type:* string

---

##### `FormatVersion`<sup>Required</sup> <a name="FormatVersion" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion"></a>

```csharp
public string FormatVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue"></a>

```csharp
public CapacityManagementOccAvailabilityCatalogMetadataDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---


### CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference <a name="CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



