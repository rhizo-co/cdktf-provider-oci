# `dataOciComputeCloudAtCustomerCccInfrastructures` Submodule <a name="`dataOciComputeCloudAtCustomerCccInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructures <a name="DataOciComputeCloudAtCustomerCccInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures oci_compute_cloud_at_customer_ccc_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructures(Construct Scope, string Id, DataOciComputeCloudAtCustomerCccInfrastructuresConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig">DataOciComputeCloudAtCustomerCccInfrastructuresConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig">DataOciComputeCloudAtCustomerCccInfrastructuresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCccInfrastructureId">ResetCccInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCccInfrastructureId` <a name="ResetCccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCccInfrastructureId"></a>

```csharp
private void ResetCccInfrastructureId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayNameContains"></a>

```csharp
private void ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccInfrastructures.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccInfrastructures.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccInfrastructures.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccInfrastructures.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructures resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccInfrastructures to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeCloudAtCustomerCccInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureCollection">CccInfrastructureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList">DataOciComputeCloudAtCustomerCccInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureIdInput">CccInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureId">CccInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CccInfrastructureCollection`<sup>Required</sup> <a name="CccInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureCollection"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList CccInfrastructureCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filter"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList">DataOciComputeCloudAtCustomerCccInfrastructuresFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CccInfrastructureIdInput`<sup>Optional</sup> <a name="CccInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureIdInput"></a>

```csharp
public string CccInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContainsInput"></a>

```csharp
public string DisplayNameContainsInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CccInfrastructureId`<sup>Required</sup> <a name="CccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureId"></a>

```csharp
public string CccInfrastructureId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructuresConfig <a name="DataOciComputeCloudAtCustomerCccInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessLevel = null,
    string CccInfrastructureId = null,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.cccInfrastructureId">CccInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}.

---

##### `CccInfrastructureId`<sup>Optional</sup> <a name="CccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.cccInfrastructureId"></a>

```csharp
public string CccInfrastructureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#filter DataOciComputeCloudAtCustomerCccInfrastructures#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}.

---

### DataOciComputeCloudAtCustomerCccInfrastructuresFilter <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#name DataOciComputeCloudAtCustomerCccInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#values DataOciComputeCloudAtCustomerCccInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#regex DataOciComputeCloudAtCustomerCccInfrastructures#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#name DataOciComputeCloudAtCustomerCccInfrastructures#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#values DataOciComputeCloudAtCustomerCccInfrastructures#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#regex DataOciComputeCloudAtCustomerCccInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.capacityStorageTrayCount">CapacityStorageTrayCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.computeNodeCount">ComputeNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.managementNodeCount">ManagementNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.performanceStorageTrayCount">PerformanceStorageTrayCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityStorageTrayCount`<sup>Required</sup> <a name="CapacityStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.capacityStorageTrayCount"></a>

```csharp
public double CapacityStorageTrayCount { get; }
```

- *Type:* double

---

##### `ComputeNodeCount`<sup>Required</sup> <a name="ComputeNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.computeNodeCount"></a>

```csharp
public double ComputeNodeCount { get; }
```

- *Type:* double

---

##### `ManagementNodeCount`<sup>Required</sup> <a name="ManagementNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.managementNodeCount"></a>

```csharp
public double ManagementNodeCount { get; }
```

- *Type:* double

---

##### `PerformanceStorageTrayCount`<sup>Required</sup> <a name="PerformanceStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.performanceStorageTrayCount"></a>

```csharp
public double PerformanceStorageTrayCount { get; }
```

- *Type:* double

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology">BgpTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn">OracleAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation">PeerInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpTopology`<sup>Required</sup> <a name="BgpTopology" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology"></a>

```csharp
public string BgpTopology { get; }
```

- *Type:* string

---

##### `OracleAsn`<sup>Required</sup> <a name="OracleAsn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn"></a>

```csharp
public double OracleAsn { get; }
```

- *Type:* double

---

##### `PeerInformation`<sup>Required</sup> <a name="PeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList PeerInformation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn">Asn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn"></a>

```csharp
public double Asn { get; }
```

- *Type:* double

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup">UplinkHsrpGroup</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan">UplinkVlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UplinkHsrpGroup`<sup>Required</sup> <a name="UplinkHsrpGroup" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup"></a>

```csharp
public double UplinkHsrpGroup { get; }
```

- *Type:* double

---

##### `UplinkVlan`<sup>Required</sup> <a name="UplinkVlan" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan"></a>

```csharp
public double UplinkVlan { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.dnsIps">DnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic">InfrastructureRoutingDynamic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic">InfrastructureRoutingStatic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.managementNodes">ManagementNodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname">MgmtVipHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp">MgmtVipIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineIps">SpineIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineVip">SpineVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain">UplinkDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp">UplinkGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask">UplinkNetmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount">UplinkPortCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection">UplinkPortForwardErrorCorrection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps">UplinkPortSpeedInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu">UplinkVlanMtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.dnsIps"></a>

```csharp
public string[] DnsIps { get; }
```

- *Type:* string[]

---

##### `InfrastructureRoutingDynamic`<sup>Required</sup> <a name="InfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList InfrastructureRoutingDynamic { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a>

---

##### `InfrastructureRoutingStatic`<sup>Required</sup> <a name="InfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList InfrastructureRoutingStatic { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a>

---

##### `ManagementNodes`<sup>Required</sup> <a name="ManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.managementNodes"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList ManagementNodes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList</a>

---

##### `MgmtVipHostname`<sup>Required</sup> <a name="MgmtVipHostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname"></a>

```csharp
public string MgmtVipHostname { get; }
```

- *Type:* string

---

##### `MgmtVipIp`<sup>Required</sup> <a name="MgmtVipIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp"></a>

```csharp
public string MgmtVipIp { get; }
```

- *Type:* string

---

##### `SpineIps`<sup>Required</sup> <a name="SpineIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineIps"></a>

```csharp
public string[] SpineIps { get; }
```

- *Type:* string[]

---

##### `SpineVip`<sup>Required</sup> <a name="SpineVip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineVip"></a>

```csharp
public string SpineVip { get; }
```

- *Type:* string

---

##### `UplinkDomain`<sup>Required</sup> <a name="UplinkDomain" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain"></a>

```csharp
public string UplinkDomain { get; }
```

- *Type:* string

---

##### `UplinkGatewayIp`<sup>Required</sup> <a name="UplinkGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp"></a>

```csharp
public string UplinkGatewayIp { get; }
```

- *Type:* string

---

##### `UplinkNetmask`<sup>Required</sup> <a name="UplinkNetmask" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask"></a>

```csharp
public string UplinkNetmask { get; }
```

- *Type:* string

---

##### `UplinkPortCount`<sup>Required</sup> <a name="UplinkPortCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount"></a>

```csharp
public double UplinkPortCount { get; }
```

- *Type:* double

---

##### `UplinkPortForwardErrorCorrection`<sup>Required</sup> <a name="UplinkPortForwardErrorCorrection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection"></a>

```csharp
public string UplinkPortForwardErrorCorrection { get; }
```

- *Type:* string

---

##### `UplinkPortSpeedInGbps`<sup>Required</sup> <a name="UplinkPortSpeedInGbps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps"></a>

```csharp
public double UplinkPortSpeedInGbps { get; }
```

- *Type:* double

---

##### `UplinkVlanMtu`<sup>Required</sup> <a name="UplinkVlanMtu" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu"></a>

```csharp
public double UplinkVlanMtu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionDetails">ConnectionDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureInventory">InfrastructureInventory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureNetworkConfiguration">InfrastructureNetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningFingerprint">ProvisioningFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningPin">ProvisioningPin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.upgradeInformation">UpgradeInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CccUpgradeScheduleId`<sup>Required</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.cccUpgradeScheduleId"></a>

```csharp
public string CccUpgradeScheduleId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionDetails`<sup>Required</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionDetails"></a>

```csharp
public string ConnectionDetails { get; }
```

- *Type:* string

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureInventory`<sup>Required</sup> <a name="InfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureInventory"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList InfrastructureInventory { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList</a>

---

##### `InfrastructureNetworkConfiguration`<sup>Required</sup> <a name="InfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureNetworkConfiguration"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList InfrastructureNetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ProvisioningFingerprint`<sup>Required</sup> <a name="ProvisioningFingerprint" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningFingerprint"></a>

```csharp
public string ProvisioningFingerprint { get; }
```

- *Type:* string

---

##### `ProvisioningPin`<sup>Required</sup> <a name="ProvisioningPin" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningPin"></a>

```csharp
public string ProvisioningPin { get; }
```

- *Type:* string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpgradeInformation`<sup>Required</sup> <a name="UpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.upgradeInformation"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList UpgradeInformation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.currentVersion">CurrentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.isActive">IsActive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.scheduledUpgradeDuration">ScheduledUpgradeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.timeOfScheduledUpgrade">TimeOfScheduledUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.currentVersion"></a>

```csharp
public string CurrentVersion { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.isActive"></a>

```csharp
public IResolvable IsActive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ScheduledUpgradeDuration`<sup>Required</sup> <a name="ScheduledUpgradeDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.scheduledUpgradeDuration"></a>

```csharp
public string ScheduledUpgradeDuration { get; }
```

- *Type:* string

---

##### `TimeOfScheduledUpgrade`<sup>Required</sup> <a name="TimeOfScheduledUpgrade" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.timeOfScheduledUpgrade"></a>

```csharp
public string TimeOfScheduledUpgrade { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.items"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresFilterList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



