# `dataOciComputeCloudAtCustomerCccUpgradeSchedules` Submodule <a name="`dataOciComputeCloudAtCustomerCccUpgradeSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedules <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedules" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules oci_compute_cloud_at_customer_ccc_upgrade_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedules(Construct Scope, string Id, DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig">DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig">DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCccUpgradeScheduleId">ResetCccUpgradeScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCccUpgradeScheduleId` <a name="ResetCccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCccUpgradeScheduleId"></a>

```csharp
private void ResetCccUpgradeScheduleId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayNameContains"></a>

```csharp
private void ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccUpgradeSchedules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccUpgradeSchedules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccUpgradeSchedules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccUpgradeSchedules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccUpgradeSchedules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeCloudAtCustomerCccUpgradeSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccUpgradeSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleCollection">CccUpgradeScheduleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleIdInput">CccUpgradeScheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CccUpgradeScheduleCollection`<sup>Required</sup> <a name="CccUpgradeScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleCollection"></a>

```csharp
public DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList CccUpgradeScheduleCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filter"></a>

```csharp
public DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CccUpgradeScheduleIdInput`<sup>Optional</sup> <a name="CccUpgradeScheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleIdInput"></a>

```csharp
public string CccUpgradeScheduleIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContainsInput"></a>

```csharp
public string DisplayNameContainsInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CccUpgradeScheduleId`<sup>Required</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleId"></a>

```csharp
public string CccUpgradeScheduleId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection {

};
```


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems {

};
```


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents {

};
```


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessLevel = null,
    string CccUpgradeScheduleId = null,
    string CompartmentId = null,
    object CompartmentIdInSubtree = null,
    string DisplayName = null,
    string DisplayNameContains = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#access_level DataOciComputeCloudAtCustomerCccUpgradeSchedules#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#ccc_upgrade_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name_contains DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#id DataOciComputeCloudAtCustomerCccUpgradeSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#state DataOciComputeCloudAtCustomerCccUpgradeSchedules#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#access_level DataOciComputeCloudAtCustomerCccUpgradeSchedules#access_level}.

---

##### `CccUpgradeScheduleId`<sup>Optional</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.cccUpgradeScheduleId"></a>

```csharp
public string CccUpgradeScheduleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#ccc_upgrade_schedule_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name_contains DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#filter DataOciComputeCloudAtCustomerCccUpgradeSchedules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#id DataOciComputeCloudAtCustomerCccUpgradeSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#state DataOciComputeCloudAtCustomerCccUpgradeSchedules#state}.

---

### DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#name DataOciComputeCloudAtCustomerCccUpgradeSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#values DataOciComputeCloudAtCustomerCccUpgradeSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#regex DataOciComputeCloudAtCustomerCccUpgradeSchedules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#name DataOciComputeCloudAtCustomerCccUpgradeSchedules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#values DataOciComputeCloudAtCustomerCccUpgradeSchedules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#regex DataOciComputeCloudAtCustomerCccUpgradeSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventDuration">ScheduleEventDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventRecurrences">ScheduleEventRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScheduleEventDuration`<sup>Required</sup> <a name="ScheduleEventDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventDuration"></a>

```csharp
public string ScheduleEventDuration { get; }
```

- *Type:* string

---

##### `ScheduleEventRecurrences`<sup>Required</sup> <a name="ScheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventRecurrences"></a>

```csharp
public string ScheduleEventRecurrences { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents</a>

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.events">Events</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.infrastructureIds">InfrastructureIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.events"></a>

```csharp
public DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList Events { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureIds`<sup>Required</sup> <a name="InfrastructureIds" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.infrastructureIds"></a>

```csharp
public string[] InfrastructureIds { get; }
```

- *Type:* string[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems</a>

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.items"></a>

```csharp
public DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection</a>

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



