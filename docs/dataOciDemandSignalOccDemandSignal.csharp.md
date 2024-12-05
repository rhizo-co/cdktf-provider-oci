# `dataOciDemandSignalOccDemandSignal` Submodule <a name="`dataOciDemandSignalOccDemandSignal` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDemandSignalOccDemandSignal <a name="DataOciDemandSignalOccDemandSignal" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signal oci_demand_signal_occ_demand_signal}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignal(Construct Scope, string Id, DataOciDemandSignalOccDemandSignalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig">DataOciDemandSignalOccDemandSignalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig">DataOciDemandSignalOccDemandSignalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDemandSignalOccDemandSignal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDemandSignalOccDemandSignal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDemandSignalOccDemandSignal.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDemandSignalOccDemandSignal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDemandSignalOccDemandSignal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDemandSignalOccDemandSignal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDemandSignalOccDemandSignal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.isActive">IsActive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.occDemandSignals">OccDemandSignals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList">DataOciDemandSignalOccDemandSignalOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList">DataOciDemandSignalOccDemandSignalPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.occDemandSignalIdInput">OccDemandSignalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.occDemandSignalId">OccDemandSignalId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.isActive"></a>

```csharp
public IResolvable IsActive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OccDemandSignals`<sup>Required</sup> <a name="OccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.occDemandSignals"></a>

```csharp
public DataOciDemandSignalOccDemandSignalOccDemandSignalsList OccDemandSignals { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList">DataOciDemandSignalOccDemandSignalOccDemandSignalsList</a>

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.patchOperations"></a>

```csharp
public DataOciDemandSignalOccDemandSignalPatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList">DataOciDemandSignalOccDemandSignalPatchOperationsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `OccDemandSignalIdInput`<sup>Optional</sup> <a name="OccDemandSignalIdInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.occDemandSignalIdInput"></a>

```csharp
public string OccDemandSignalIdInput { get; }
```

- *Type:* string

---

##### `OccDemandSignalId`<sup>Required</sup> <a name="OccDemandSignalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.occDemandSignalId"></a>

```csharp
public string OccDemandSignalId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDemandSignalOccDemandSignalConfig <a name="DataOciDemandSignalOccDemandSignalConfig" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OccDemandSignalId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.occDemandSignalId">OccDemandSignalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signal#occ_demand_signal_id DataOciDemandSignalOccDemandSignal#occ_demand_signal_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OccDemandSignalId`<sup>Required</sup> <a name="OccDemandSignalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalConfig.property.occDemandSignalId"></a>

```csharp
public string OccDemandSignalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signal#occ_demand_signal_id DataOciDemandSignalOccDemandSignal#occ_demand_signal_id}.

---

### DataOciDemandSignalOccDemandSignalOccDemandSignals <a name="DataOciDemandSignalOccDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalOccDemandSignals {

};
```


### DataOciDemandSignalOccDemandSignalOccDemandSignalsValues <a name="DataOciDemandSignalOccDemandSignalOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalOccDemandSignalsValues {

};
```


### DataOciDemandSignalOccDemandSignalPatchOperations <a name="DataOciDemandSignalOccDemandSignalPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalPatchOperations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDemandSignalOccDemandSignalOccDemandSignalsList <a name="DataOciDemandSignalOccDemandSignalOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalOccDemandSignalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.get"></a>

```csharp
private DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference <a name="DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignals">DataOciDemandSignalOccDemandSignalOccDemandSignals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values"></a>

```csharp
public DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList Values { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue"></a>

```csharp
public DataOciDemandSignalOccDemandSignalOccDemandSignals InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignals">DataOciDemandSignalOccDemandSignalOccDemandSignals</a>

---


### DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList <a name="DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.get"></a>

```csharp
private DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference <a name="DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected">TimeExpected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalOccDemandSignalsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `TimeExpected`<sup>Required</sup> <a name="TimeExpected" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```csharp
public string TimeExpected { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```csharp
public DataOciDemandSignalOccDemandSignalOccDemandSignalsValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalOccDemandSignalsValues</a>

---


### DataOciDemandSignalOccDemandSignalPatchOperationsList <a name="DataOciDemandSignalOccDemandSignalPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalPatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.get"></a>

```csharp
private DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference <a name="DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.value">Value</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperations">DataOciDemandSignalOccDemandSignalPatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem"></a>

```csharp
public string SelectedItem { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.value"></a>

```csharp
public StringMap Value { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue"></a>

```csharp
public DataOciDemandSignalOccDemandSignalPatchOperations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignal.DataOciDemandSignalOccDemandSignalPatchOperations">DataOciDemandSignalOccDemandSignalPatchOperations</a>

---



