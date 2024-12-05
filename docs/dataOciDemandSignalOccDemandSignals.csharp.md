# `dataOciDemandSignalOccDemandSignals` Submodule <a name="`dataOciDemandSignalOccDemandSignals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDemandSignalOccDemandSignals <a name="DataOciDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals oci_demand_signal_occ_demand_signals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignals(Construct Scope, string Id, DataOciDemandSignalOccDemandSignalsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig">DataOciDemandSignalOccDemandSignalsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig">DataOciDemandSignalOccDemandSignalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDemandSignalOccDemandSignals.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDemandSignalOccDemandSignals.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDemandSignalOccDemandSignals.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDemandSignalOccDemandSignals.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignals resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDemandSignalOccDemandSignals to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDemandSignalOccDemandSignals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDemandSignalOccDemandSignals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList">DataOciDemandSignalOccDemandSignalsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.occDemandSignalCollection">OccDemandSignalCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filter"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList">DataOciDemandSignalOccDemandSignalsFilterList</a>

---

##### `OccDemandSignalCollection`<sup>Required</sup> <a name="OccDemandSignalCollection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.occDemandSignalCollection"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList OccDemandSignalCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDemandSignalOccDemandSignalsConfig <a name="DataOciDemandSignalOccDemandSignalsConfig" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#filter DataOciDemandSignalOccDemandSignals#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}.

---

### DataOciDemandSignalOccDemandSignalsFilter <a name="DataOciDemandSignalOccDemandSignalsFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#name DataOciDemandSignalOccDemandSignals#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#values DataOciDemandSignalOccDemandSignals#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#regex DataOciDemandSignalOccDemandSignals#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#name DataOciDemandSignalOccDemandSignals#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#values DataOciDemandSignalOccDemandSignals#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#regex DataOciDemandSignalOccDemandSignals#regex}.

---

### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection {

};
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems {

};
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals {

};
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues {

};
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDemandSignalOccDemandSignalsFilterList <a name="DataOciDemandSignalOccDemandSignalsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get"></a>

```csharp
private DataOciDemandSignalOccDemandSignalsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDemandSignalOccDemandSignalsFilterOutputReference <a name="DataOciDemandSignalOccDemandSignalsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get"></a>

```csharp
private DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get"></a>

```csharp
private DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.values"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList Values { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.internalValue"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get"></a>

```csharp
private DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.timeExpected">TimeExpected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `TimeExpected`<sup>Required</sup> <a name="TimeExpected" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```csharp
public string TimeExpected { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.isActive">IsActive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignalId">OccDemandSignalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignals">OccDemandSignals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.isActive"></a>

```csharp
public IResolvable IsActive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OccDemandSignalId`<sup>Required</sup> <a name="OccDemandSignalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignalId"></a>

```csharp
public string OccDemandSignalId { get; }
```

- *Type:* string

---

##### `OccDemandSignals`<sup>Required</sup> <a name="OccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignals"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList OccDemandSignals { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList</a>

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.patchOperations"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get"></a>

```csharp
private DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.value">Value</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```csharp
public string SelectedItem { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.value"></a>

```csharp
public StringMap Value { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get"></a>

```csharp
private DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.items"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection</a>

---



