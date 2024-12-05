# `dataOciOcvpEsxiHosts` Submodule <a name="`dataOciOcvpEsxiHosts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpEsxiHosts <a name="DataOciOcvpEsxiHosts" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts oci_ocvp_esxi_hosts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHosts(Construct Scope, string Id, DataOciOcvpEsxiHostsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig">DataOciOcvpEsxiHostsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig">DataOciOcvpEsxiHostsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetComputeInstanceId">ResetComputeInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsBillingDonorsOnly">ResetIsBillingDonorsOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsSwapBillingOnly">ResetIsSwapBillingOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetSddcId">ResetSddcId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetClusterId` <a name="ResetClusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetComputeInstanceId` <a name="ResetComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetComputeInstanceId"></a>

```csharp
private void ResetComputeInstanceId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsBillingDonorsOnly` <a name="ResetIsBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsBillingDonorsOnly"></a>

```csharp
private void ResetIsBillingDonorsOnly()
```

##### `ResetIsSwapBillingOnly` <a name="ResetIsSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsSwapBillingOnly"></a>

```csharp
private void ResetIsSwapBillingOnly()
```

##### `ResetSddcId` <a name="ResetSddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetSddcId"></a>

```csharp
private void ResetSddcId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpEsxiHosts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpEsxiHosts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpEsxiHosts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpEsxiHosts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpEsxiHosts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOcvpEsxiHosts resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOcvpEsxiHosts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOcvpEsxiHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpEsxiHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.esxiHostCollection">EsxiHostCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList">DataOciOcvpEsxiHostsEsxiHostCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList">DataOciOcvpEsxiHostsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceIdInput">ComputeInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnlyInput">IsBillingDonorsOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnlyInput">IsSwapBillingOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcIdInput">SddcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceId">ComputeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnly">IsBillingDonorsOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnly">IsSwapBillingOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcId">SddcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EsxiHostCollection`<sup>Required</sup> <a name="EsxiHostCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.esxiHostCollection"></a>

```csharp
public DataOciOcvpEsxiHostsEsxiHostCollectionList EsxiHostCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList">DataOciOcvpEsxiHostsEsxiHostCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filter"></a>

```csharp
public DataOciOcvpEsxiHostsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList">DataOciOcvpEsxiHostsFilterList</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeInstanceIdInput`<sup>Optional</sup> <a name="ComputeInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceIdInput"></a>

```csharp
public string ComputeInstanceIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsBillingDonorsOnlyInput`<sup>Optional</sup> <a name="IsBillingDonorsOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnlyInput"></a>

```csharp
public object IsBillingDonorsOnlyInput { get; }
```

- *Type:* object

---

##### `IsSwapBillingOnlyInput`<sup>Optional</sup> <a name="IsSwapBillingOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnlyInput"></a>

```csharp
public object IsSwapBillingOnlyInput { get; }
```

- *Type:* object

---

##### `SddcIdInput`<sup>Optional</sup> <a name="SddcIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcIdInput"></a>

```csharp
public string SddcIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeInstanceId`<sup>Required</sup> <a name="ComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceId"></a>

```csharp
public string ComputeInstanceId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsBillingDonorsOnly`<sup>Required</sup> <a name="IsBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnly"></a>

```csharp
public object IsBillingDonorsOnly { get; }
```

- *Type:* object

---

##### `IsSwapBillingOnly`<sup>Required</sup> <a name="IsSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnly"></a>

```csharp
public object IsSwapBillingOnly { get; }
```

- *Type:* object

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcId"></a>

```csharp
public string SddcId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpEsxiHostsConfig <a name="DataOciOcvpEsxiHostsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHostsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId = null,
    string CompartmentId = null,
    string ComputeInstanceId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    object IsBillingDonorsOnly = null,
    object IsSwapBillingOnly = null,
    string SddcId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.computeInstanceId">ComputeInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isBillingDonorsOnly">IsBillingDonorsOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isSwapBillingOnly">IsSwapBillingOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.sddcId">SddcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}.

---

##### `ComputeInstanceId`<sup>Optional</sup> <a name="ComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.computeInstanceId"></a>

```csharp
public string ComputeInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#filter DataOciOcvpEsxiHosts#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsBillingDonorsOnly`<sup>Optional</sup> <a name="IsBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isBillingDonorsOnly"></a>

```csharp
public object IsBillingDonorsOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}.

---

##### `IsSwapBillingOnly`<sup>Optional</sup> <a name="IsSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isSwapBillingOnly"></a>

```csharp
public object IsSwapBillingOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}.

---

##### `SddcId`<sup>Optional</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.sddcId"></a>

```csharp
public string SddcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}.

---

### DataOciOcvpEsxiHostsEsxiHostCollection <a name="DataOciOcvpEsxiHostsEsxiHostCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHostsEsxiHostCollection {

};
```


### DataOciOcvpEsxiHostsFilter <a name="DataOciOcvpEsxiHostsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHostsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#name DataOciOcvpEsxiHosts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#values DataOciOcvpEsxiHosts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#regex DataOciOcvpEsxiHosts#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#name DataOciOcvpEsxiHosts#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#values DataOciOcvpEsxiHosts#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#regex DataOciOcvpEsxiHosts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpEsxiHostsEsxiHostCollectionList <a name="DataOciOcvpEsxiHostsEsxiHostCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHostsEsxiHostCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get"></a>

```csharp
private DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference <a name="DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingContractEndDate">BillingContractEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingDonorHostId">BillingDonorHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeInstanceId">ComputeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentCommitment">CurrentCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentSku">CurrentSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.failedEsxiHostId">FailedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.gracePeriodEndDate">GracePeriodEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostOcpuCount">HostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostShapeName">HostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingContinuationInProgress">IsBillingContinuationInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingSwappingInProgress">IsBillingSwappingInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextCommitment">NextCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextSku">NextSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nonUpgradedEsxiHostId">NonUpgradedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.replacementEsxiHostId">ReplacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.sddcId">SddcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.swapBillingHostId">SwapBillingHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.upgradedReplacementEsxiHostId">UpgradedReplacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection">DataOciOcvpEsxiHostsEsxiHostCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillingContractEndDate`<sup>Required</sup> <a name="BillingContractEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingContractEndDate"></a>

```csharp
public string BillingContractEndDate { get; }
```

- *Type:* string

---

##### `BillingDonorHostId`<sup>Required</sup> <a name="BillingDonorHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingDonorHostId"></a>

```csharp
public string BillingDonorHostId { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `ComputeInstanceId`<sup>Required</sup> <a name="ComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeInstanceId"></a>

```csharp
public string ComputeInstanceId { get; }
```

- *Type:* string

---

##### `CurrentCommitment`<sup>Required</sup> <a name="CurrentCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentCommitment"></a>

```csharp
public string CurrentCommitment { get; }
```

- *Type:* string

---

##### `CurrentSku`<sup>Required</sup> <a name="CurrentSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentSku"></a>

```csharp
public string CurrentSku { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; }
```

- *Type:* string

---

##### `FailedEsxiHostId`<sup>Required</sup> <a name="FailedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.failedEsxiHostId"></a>

```csharp
public string FailedEsxiHostId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GracePeriodEndDate`<sup>Required</sup> <a name="GracePeriodEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.gracePeriodEndDate"></a>

```csharp
public string GracePeriodEndDate { get; }
```

- *Type:* string

---

##### `HostOcpuCount`<sup>Required</sup> <a name="HostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostOcpuCount"></a>

```csharp
public double HostOcpuCount { get; }
```

- *Type:* double

---

##### `HostShapeName`<sup>Required</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostShapeName"></a>

```csharp
public string HostShapeName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsBillingContinuationInProgress`<sup>Required</sup> <a name="IsBillingContinuationInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingContinuationInProgress"></a>

```csharp
public IResolvable IsBillingContinuationInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsBillingSwappingInProgress`<sup>Required</sup> <a name="IsBillingSwappingInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingSwappingInProgress"></a>

```csharp
public IResolvable IsBillingSwappingInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NextCommitment`<sup>Required</sup> <a name="NextCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextCommitment"></a>

```csharp
public string NextCommitment { get; }
```

- *Type:* string

---

##### `NextSku`<sup>Required</sup> <a name="NextSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextSku"></a>

```csharp
public string NextSku { get; }
```

- *Type:* string

---

##### `NonUpgradedEsxiHostId`<sup>Required</sup> <a name="NonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nonUpgradedEsxiHostId"></a>

```csharp
public string NonUpgradedEsxiHostId { get; }
```

- *Type:* string

---

##### `ReplacementEsxiHostId`<sup>Required</sup> <a name="ReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.replacementEsxiHostId"></a>

```csharp
public string ReplacementEsxiHostId { get; }
```

- *Type:* string

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.sddcId"></a>

```csharp
public string SddcId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SwapBillingHostId`<sup>Required</sup> <a name="SwapBillingHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.swapBillingHostId"></a>

```csharp
public string SwapBillingHostId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpgradedReplacementEsxiHostId`<sup>Required</sup> <a name="UpgradedReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.upgradedReplacementEsxiHostId"></a>

```csharp
public string UpgradedReplacementEsxiHostId { get; }
```

- *Type:* string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.vmwareSoftwareVersion"></a>

```csharp
public string VmwareSoftwareVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpEsxiHostsEsxiHostCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection">DataOciOcvpEsxiHostsEsxiHostCollection</a>

---


### DataOciOcvpEsxiHostsFilterList <a name="DataOciOcvpEsxiHostsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHostsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get"></a>

```csharp
private DataOciOcvpEsxiHostsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOcvpEsxiHostsFilterOutputReference <a name="DataOciOcvpEsxiHostsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHostsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



