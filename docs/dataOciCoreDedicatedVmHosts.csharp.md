# `dataOciCoreDedicatedVmHosts` Submodule <a name="`dataOciCoreDedicatedVmHosts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDedicatedVmHosts <a name="DataOciCoreDedicatedVmHosts" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts oci_core_dedicated_vm_hosts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHosts(Construct Scope, string Id, DataOciCoreDedicatedVmHostsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig">DataOciCoreDedicatedVmHostsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig">DataOciCoreDedicatedVmHostsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetInstanceShapeName">ResetInstanceShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetRemainingMemoryInGbsGreaterThanOrEqualTo">ResetRemainingMemoryInGbsGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetRemainingOcpusGreaterThanOrEqualTo">ResetRemainingOcpusGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceShapeName` <a name="ResetInstanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetInstanceShapeName"></a>

```csharp
private void ResetInstanceShapeName()
```

##### `ResetRemainingMemoryInGbsGreaterThanOrEqualTo` <a name="ResetRemainingMemoryInGbsGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetRemainingMemoryInGbsGreaterThanOrEqualTo"></a>

```csharp
private void ResetRemainingMemoryInGbsGreaterThanOrEqualTo()
```

##### `ResetRemainingOcpusGreaterThanOrEqualTo` <a name="ResetRemainingOcpusGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetRemainingOcpusGreaterThanOrEqualTo"></a>

```csharp
private void ResetRemainingOcpusGreaterThanOrEqualTo()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDedicatedVmHosts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDedicatedVmHosts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDedicatedVmHosts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDedicatedVmHosts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDedicatedVmHosts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreDedicatedVmHosts resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreDedicatedVmHosts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreDedicatedVmHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDedicatedVmHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.dedicatedVmHosts">DedicatedVmHosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList">DataOciCoreDedicatedVmHostsDedicatedVmHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList">DataOciCoreDedicatedVmHostsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.instanceShapeNameInput">InstanceShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.remainingMemoryInGbsGreaterThanOrEqualToInput">RemainingMemoryInGbsGreaterThanOrEqualToInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.remainingOcpusGreaterThanOrEqualToInput">RemainingOcpusGreaterThanOrEqualToInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.instanceShapeName">InstanceShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.remainingMemoryInGbsGreaterThanOrEqualTo">RemainingMemoryInGbsGreaterThanOrEqualTo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.remainingOcpusGreaterThanOrEqualTo">RemainingOcpusGreaterThanOrEqualTo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DedicatedVmHosts`<sup>Required</sup> <a name="DedicatedVmHosts" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.dedicatedVmHosts"></a>

```csharp
public DataOciCoreDedicatedVmHostsDedicatedVmHostsList DedicatedVmHosts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList">DataOciCoreDedicatedVmHostsDedicatedVmHostsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.filter"></a>

```csharp
public DataOciCoreDedicatedVmHostsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList">DataOciCoreDedicatedVmHostsFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceShapeNameInput`<sup>Optional</sup> <a name="InstanceShapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.instanceShapeNameInput"></a>

```csharp
public string InstanceShapeNameInput { get; }
```

- *Type:* string

---

##### `RemainingMemoryInGbsGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="RemainingMemoryInGbsGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.remainingMemoryInGbsGreaterThanOrEqualToInput"></a>

```csharp
public double RemainingMemoryInGbsGreaterThanOrEqualToInput { get; }
```

- *Type:* double

---

##### `RemainingOcpusGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="RemainingOcpusGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.remainingOcpusGreaterThanOrEqualToInput"></a>

```csharp
public double RemainingOcpusGreaterThanOrEqualToInput { get; }
```

- *Type:* double

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceShapeName`<sup>Required</sup> <a name="InstanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.instanceShapeName"></a>

```csharp
public string InstanceShapeName { get; }
```

- *Type:* string

---

##### `RemainingMemoryInGbsGreaterThanOrEqualTo`<sup>Required</sup> <a name="RemainingMemoryInGbsGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.remainingMemoryInGbsGreaterThanOrEqualTo"></a>

```csharp
public double RemainingMemoryInGbsGreaterThanOrEqualTo { get; }
```

- *Type:* double

---

##### `RemainingOcpusGreaterThanOrEqualTo`<sup>Required</sup> <a name="RemainingOcpusGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.remainingOcpusGreaterThanOrEqualTo"></a>

```csharp
public double RemainingOcpusGreaterThanOrEqualTo { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHosts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDedicatedVmHostsConfig <a name="DataOciCoreDedicatedVmHostsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AvailabilityDomain = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string InstanceShapeName = null,
    double RemainingMemoryInGbsGreaterThanOrEqualTo = null,
    double RemainingOcpusGreaterThanOrEqualTo = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#compartment_id DataOciCoreDedicatedVmHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#availability_domain DataOciCoreDedicatedVmHosts#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#display_name DataOciCoreDedicatedVmHosts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#id DataOciCoreDedicatedVmHosts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.instanceShapeName">InstanceShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#instance_shape_name DataOciCoreDedicatedVmHosts#instance_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.remainingMemoryInGbsGreaterThanOrEqualTo">RemainingMemoryInGbsGreaterThanOrEqualTo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#remaining_memory_in_gbs_greater_than_or_equal_to DataOciCoreDedicatedVmHosts#remaining_memory_in_gbs_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.remainingOcpusGreaterThanOrEqualTo">RemainingOcpusGreaterThanOrEqualTo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#remaining_ocpus_greater_than_or_equal_to DataOciCoreDedicatedVmHosts#remaining_ocpus_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#state DataOciCoreDedicatedVmHosts#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#compartment_id DataOciCoreDedicatedVmHosts#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#availability_domain DataOciCoreDedicatedVmHosts#availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#display_name DataOciCoreDedicatedVmHosts#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#filter DataOciCoreDedicatedVmHosts#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#id DataOciCoreDedicatedVmHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceShapeName`<sup>Optional</sup> <a name="InstanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.instanceShapeName"></a>

```csharp
public string InstanceShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#instance_shape_name DataOciCoreDedicatedVmHosts#instance_shape_name}.

---

##### `RemainingMemoryInGbsGreaterThanOrEqualTo`<sup>Optional</sup> <a name="RemainingMemoryInGbsGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.remainingMemoryInGbsGreaterThanOrEqualTo"></a>

```csharp
public double RemainingMemoryInGbsGreaterThanOrEqualTo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#remaining_memory_in_gbs_greater_than_or_equal_to DataOciCoreDedicatedVmHosts#remaining_memory_in_gbs_greater_than_or_equal_to}.

---

##### `RemainingOcpusGreaterThanOrEqualTo`<sup>Optional</sup> <a name="RemainingOcpusGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.remainingOcpusGreaterThanOrEqualTo"></a>

```csharp
public double RemainingOcpusGreaterThanOrEqualTo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#remaining_ocpus_greater_than_or_equal_to DataOciCoreDedicatedVmHosts#remaining_ocpus_greater_than_or_equal_to}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#state DataOciCoreDedicatedVmHosts#state}.

---

### DataOciCoreDedicatedVmHostsDedicatedVmHosts <a name="DataOciCoreDedicatedVmHostsDedicatedVmHosts" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostsDedicatedVmHosts {

};
```


### DataOciCoreDedicatedVmHostsFilter <a name="DataOciCoreDedicatedVmHostsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#name DataOciCoreDedicatedVmHosts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#values DataOciCoreDedicatedVmHosts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#regex DataOciCoreDedicatedVmHosts#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#name DataOciCoreDedicatedVmHosts#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#values DataOciCoreDedicatedVmHosts#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts#regex DataOciCoreDedicatedVmHosts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDedicatedVmHostsDedicatedVmHostsList <a name="DataOciCoreDedicatedVmHostsDedicatedVmHostsList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostsDedicatedVmHostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.get"></a>

```csharp
private DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference <a name="DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.dedicatedVmHostShape">DedicatedVmHostShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.remainingMemoryInGbs">RemainingMemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.remainingOcpus">RemainingOcpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.totalMemoryInGbs">TotalMemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.totalOcpus">TotalOcpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHosts">DataOciCoreDedicatedVmHostsDedicatedVmHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DedicatedVmHostShape`<sup>Required</sup> <a name="DedicatedVmHostShape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.dedicatedVmHostShape"></a>

```csharp
public string DedicatedVmHostShape { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RemainingMemoryInGbs`<sup>Required</sup> <a name="RemainingMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.remainingMemoryInGbs"></a>

```csharp
public double RemainingMemoryInGbs { get; }
```

- *Type:* double

---

##### `RemainingOcpus`<sup>Required</sup> <a name="RemainingOcpus" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.remainingOcpus"></a>

```csharp
public double RemainingOcpus { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TotalMemoryInGbs`<sup>Required</sup> <a name="TotalMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.totalMemoryInGbs"></a>

```csharp
public double TotalMemoryInGbs { get; }
```

- *Type:* double

---

##### `TotalOcpus`<sup>Required</sup> <a name="TotalOcpus" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.totalOcpus"></a>

```csharp
public double TotalOcpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHostsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreDedicatedVmHostsDedicatedVmHosts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsDedicatedVmHosts">DataOciCoreDedicatedVmHostsDedicatedVmHosts</a>

---


### DataOciCoreDedicatedVmHostsFilterList <a name="DataOciCoreDedicatedVmHostsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.get"></a>

```csharp
private DataOciCoreDedicatedVmHostsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreDedicatedVmHostsFilterOutputReference <a name="DataOciCoreDedicatedVmHostsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDedicatedVmHostsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHosts.DataOciCoreDedicatedVmHostsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



