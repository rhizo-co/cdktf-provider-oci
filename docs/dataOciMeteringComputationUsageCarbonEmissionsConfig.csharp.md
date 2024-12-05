# `dataOciMeteringComputationUsageCarbonEmissionsConfig` Submodule <a name="`dataOciMeteringComputationUsageCarbonEmissionsConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationUsageCarbonEmissionsConfig <a name="DataOciMeteringComputationUsageCarbonEmissionsConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_config oci_metering_computation_usage_carbon_emissions_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsConfig(Construct Scope, string Id, DataOciMeteringComputationUsageCarbonEmissionsConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig">DataOciMeteringComputationUsageCarbonEmissionsConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig">DataOciMeteringComputationUsageCarbonEmissionsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationUsageCarbonEmissionsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationUsageCarbonEmissionsConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationUsageCarbonEmissionsConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationUsageCarbonEmissionsConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationUsageCarbonEmissionsConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMeteringComputationUsageCarbonEmissionsConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMeteringComputationUsageCarbonEmissionsConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMeteringComputationUsageCarbonEmissionsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationUsageCarbonEmissionsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList">DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.items"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList">DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationUsageCarbonEmissionsConfigConfig <a name="DataOciMeteringComputationUsageCarbonEmissionsConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TenantId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_config#tenant_id DataOciMeteringComputationUsageCarbonEmissionsConfig#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_config#id DataOciMeteringComputationUsageCarbonEmissionsConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_config#tenant_id DataOciMeteringComputationUsageCarbonEmissionsConfig#tenant_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_config#id DataOciMeteringComputationUsageCarbonEmissionsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMeteringComputationUsageCarbonEmissionsConfigItems <a name="DataOciMeteringComputationUsageCarbonEmissionsConfigItems" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsConfigItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList <a name="DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.get"></a>

```csharp
private DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItems">DataOciMeteringComputationUsageCarbonEmissionsConfigItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsConfigItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsConfig.DataOciMeteringComputationUsageCarbonEmissionsConfigItems">DataOciMeteringComputationUsageCarbonEmissionsConfigItems</a>

---



