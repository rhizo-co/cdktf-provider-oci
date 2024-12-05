# `dataOciCoreComputeCapacityTopologyComputeHpcIslands` Submodule <a name="`dataOciCoreComputeCapacityTopologyComputeHpcIslands` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityTopologyComputeHpcIslands <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslands" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands oci_core_compute_capacity_topology_compute_hpc_islands}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslands(Construct Scope, string Id, DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig">DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig">DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeHpcIslands resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeCapacityTopologyComputeHpcIslands.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeCapacityTopologyComputeHpcIslands.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeCapacityTopologyComputeHpcIslands.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeCapacityTopologyComputeHpcIslands.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeHpcIslands resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeCapacityTopologyComputeHpcIslands to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeCapacityTopologyComputeHpcIslands that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityTopologyComputeHpcIslands to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeHpcIslandCollection">ComputeHpcIslandCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyIdInput">ComputeCapacityTopologyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyId">ComputeCapacityTopologyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ComputeHpcIslandCollection`<sup>Required</sup> <a name="ComputeHpcIslandCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeHpcIslandCollection"></a>

```csharp
public DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList ComputeHpcIslandCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filter"></a>

```csharp
public DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeCapacityTopologyIdInput`<sup>Optional</sup> <a name="ComputeCapacityTopologyIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyIdInput"></a>

```csharp
public string ComputeCapacityTopologyIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeCapacityTopologyId`<sup>Required</sup> <a name="ComputeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyId"></a>

```csharp
public string ComputeCapacityTopologyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection {

};
```


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems {

};
```


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComputeCapacityTopologyId,
    string AvailabilityDomain = null,
    string CompartmentId = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.computeCapacityTopologyId">ComputeCapacityTopologyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#availability_domain DataOciCoreComputeCapacityTopologyComputeHpcIslands#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compartment_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#id DataOciCoreComputeCapacityTopologyComputeHpcIslands#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComputeCapacityTopologyId`<sup>Required</sup> <a name="ComputeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.computeCapacityTopologyId"></a>

```csharp
public string ComputeCapacityTopologyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compute_capacity_topology_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#availability_domain DataOciCoreComputeCapacityTopologyComputeHpcIslands#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compartment_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#filter DataOciCoreComputeCapacityTopologyComputeHpcIslands#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#id DataOciCoreComputeCapacityTopologyComputeHpcIslands#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#name DataOciCoreComputeCapacityTopologyComputeHpcIslands#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#values DataOciCoreComputeCapacityTopologyComputeHpcIslands#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#regex DataOciCoreComputeCapacityTopologyComputeHpcIslands#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#name DataOciCoreComputeCapacityTopologyComputeHpcIslands#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#values DataOciCoreComputeCapacityTopologyComputeHpcIslands#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#regex DataOciCoreComputeCapacityTopologyComputeHpcIslands#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.get"></a>

```csharp
private DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.computeCapacityTopologyId">ComputeCapacityTopologyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.totalComputeBareMetalHostCount">TotalComputeBareMetalHostCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeCapacityTopologyId`<sup>Required</sup> <a name="ComputeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.computeCapacityTopologyId"></a>

```csharp
public string ComputeCapacityTopologyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalComputeBareMetalHostCount`<sup>Required</sup> <a name="TotalComputeBareMetalHostCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.totalComputeBareMetalHostCount"></a>

```csharp
public string TotalComputeBareMetalHostCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems</a>

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.get"></a>

```csharp
private DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.items"></a>

```csharp
public DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection</a>

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.get"></a>

```csharp
private DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



