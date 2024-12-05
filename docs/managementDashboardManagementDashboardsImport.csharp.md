# `managementDashboardManagementDashboardsImport` Submodule <a name="`managementDashboardManagementDashboardsImport` Submodule" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementDashboardManagementDashboardsImport <a name="ManagementDashboardManagementDashboardsImport" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import oci_management_dashboard_management_dashboards_import}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementDashboardManagementDashboardsImport(Construct Scope, string Id, ManagementDashboardManagementDashboardsImportConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig">ManagementDashboardManagementDashboardsImportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig">ManagementDashboardManagementDashboardsImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetails">ResetImportDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetailsFile">ResetImportDetailsFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagementDashboardManagementDashboardsImportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportDetails` <a name="ResetImportDetails" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetails"></a>

```csharp
private void ResetImportDetails()
```

##### `ResetImportDetailsFile` <a name="ResetImportDetailsFile" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetailsFile"></a>

```csharp
private void ResetImportDetailsFile()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementDashboardManagementDashboardsImport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementDashboardManagementDashboardsImport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementDashboardManagementDashboardsImport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementDashboardManagementDashboardsImport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementDashboardManagementDashboardsImport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagementDashboardManagementDashboardsImport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagementDashboardManagementDashboardsImport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagementDashboardManagementDashboardsImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagementDashboardManagementDashboardsImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference">ManagementDashboardManagementDashboardsImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFileInput">ImportDetailsFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsInput">ImportDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetails">ImportDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFile">ImportDetailsFile</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeouts"></a>

```csharp
public ManagementDashboardManagementDashboardsImportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference">ManagementDashboardManagementDashboardsImportTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportDetailsFileInput`<sup>Optional</sup> <a name="ImportDetailsFileInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFileInput"></a>

```csharp
public string ImportDetailsFileInput { get; }
```

- *Type:* string

---

##### `ImportDetailsInput`<sup>Optional</sup> <a name="ImportDetailsInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsInput"></a>

```csharp
public string ImportDetailsInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportDetails`<sup>Required</sup> <a name="ImportDetails" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetails"></a>

```csharp
public string ImportDetails { get; }
```

- *Type:* string

---

##### `ImportDetailsFile`<sup>Required</sup> <a name="ImportDetailsFile" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFile"></a>

```csharp
public string ImportDetailsFile { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementDashboardManagementDashboardsImportConfig <a name="ManagementDashboardManagementDashboardsImportConfig" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementDashboardManagementDashboardsImportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string ImportDetails = null,
    string ImportDetailsFile = null,
    ManagementDashboardManagementDashboardsImportTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#id ManagementDashboardManagementDashboardsImport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetails">ImportDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details ManagementDashboardManagementDashboardsImport#import_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetailsFile">ImportDetailsFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details_file ManagementDashboardManagementDashboardsImport#import_details_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#id ManagementDashboardManagementDashboardsImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportDetails`<sup>Optional</sup> <a name="ImportDetails" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetails"></a>

```csharp
public string ImportDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details ManagementDashboardManagementDashboardsImport#import_details}.

---

##### `ImportDetailsFile`<sup>Optional</sup> <a name="ImportDetailsFile" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetailsFile"></a>

```csharp
public string ImportDetailsFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details_file ManagementDashboardManagementDashboardsImport#import_details_file}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.timeouts"></a>

```csharp
public ManagementDashboardManagementDashboardsImportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#timeouts ManagementDashboardManagementDashboardsImport#timeouts}

---

### ManagementDashboardManagementDashboardsImportTimeouts <a name="ManagementDashboardManagementDashboardsImportTimeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementDashboardManagementDashboardsImportTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#create ManagementDashboardManagementDashboardsImport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#delete ManagementDashboardManagementDashboardsImport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#update ManagementDashboardManagementDashboardsImport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#create ManagementDashboardManagementDashboardsImport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#delete ManagementDashboardManagementDashboardsImport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#update ManagementDashboardManagementDashboardsImport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementDashboardManagementDashboardsImportTimeoutsOutputReference <a name="ManagementDashboardManagementDashboardsImportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementDashboardManagementDashboardsImportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



