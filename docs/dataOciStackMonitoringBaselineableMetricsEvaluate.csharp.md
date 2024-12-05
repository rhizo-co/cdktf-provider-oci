# `dataOciStackMonitoringBaselineableMetricsEvaluate` Submodule <a name="`dataOciStackMonitoringBaselineableMetricsEvaluate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringBaselineableMetricsEvaluate <a name="DataOciStackMonitoringBaselineableMetricsEvaluate" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate oci_stack_monitoring_baselineable_metrics_evaluate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluate(Construct Scope, string Id, DataOciStackMonitoringBaselineableMetricsEvaluateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig">DataOciStackMonitoringBaselineableMetricsEvaluateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig">DataOciStackMonitoringBaselineableMetricsEvaluateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.putItems.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetricsEvaluate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringBaselineableMetricsEvaluate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringBaselineableMetricsEvaluate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringBaselineableMetricsEvaluate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringBaselineableMetricsEvaluate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetricsEvaluate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStackMonitoringBaselineableMetricsEvaluate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStackMonitoringBaselineableMetricsEvaluate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringBaselineableMetricsEvaluate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dataPoints">DataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricIdInput">BaselineableMetricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricId">BaselineableMetricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DataPoints`<sup>Required</sup> <a name="DataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dataPoints"></a>

```csharp
public DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList DataPoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList</a>

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.items"></a>

```csharp
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsList</a>

---

##### `BaselineableMetricIdInput`<sup>Optional</sup> <a name="BaselineableMetricIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricIdInput"></a>

```csharp
public string BaselineableMetricIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `BaselineableMetricId`<sup>Required</sup> <a name="BaselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricId"></a>

```csharp
public string BaselineableMetricId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringBaselineableMetricsEvaluateConfig <a name="DataOciStackMonitoringBaselineableMetricsEvaluateConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BaselineableMetricId,
    object Items,
    string ResourceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.baselineableMetricId">BaselineableMetricId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#baselineable_metric_id DataOciStackMonitoringBaselineableMetricsEvaluate#baselineable_metric_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.items">Items</a></code> | <code>object</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#resource_id DataOciStackMonitoringBaselineableMetricsEvaluate#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#id DataOciStackMonitoringBaselineableMetricsEvaluate#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BaselineableMetricId`<sup>Required</sup> <a name="BaselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.baselineableMetricId"></a>

```csharp
public string BaselineableMetricId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#baselineable_metric_id DataOciStackMonitoringBaselineableMetricsEvaluate#baselineable_metric_id}.

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#items DataOciStackMonitoringBaselineableMetricsEvaluate#items}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#resource_id DataOciStackMonitoringBaselineableMetricsEvaluate#resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#id DataOciStackMonitoringBaselineableMetricsEvaluate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints {

};
```


### DataOciStackMonitoringBaselineableMetricsEvaluateItems <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItems {
    object EvaluationDataPoints,
    object TrainingDataPoints,
    System.Collections.Generic.IDictionary<string, string> Dimensions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.evaluationDataPoints">EvaluationDataPoints</a></code> | <code>object</code> | evaluation_data_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.trainingDataPoints">TrainingDataPoints</a></code> | <code>object</code> | training_data_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#dimensions DataOciStackMonitoringBaselineableMetricsEvaluate#dimensions}. |

---

##### `EvaluationDataPoints`<sup>Required</sup> <a name="EvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.evaluationDataPoints"></a>

```csharp
public object EvaluationDataPoints { get; set; }
```

- *Type:* object

evaluation_data_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#evaluation_data_points DataOciStackMonitoringBaselineableMetricsEvaluate#evaluation_data_points}

---

##### `TrainingDataPoints`<sup>Required</sup> <a name="TrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.trainingDataPoints"></a>

```csharp
public object TrainingDataPoints { get; set; }
```

- *Type:* object

training_data_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#training_data_points DataOciStackMonitoringBaselineableMetricsEvaluate#training_data_points}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#dimensions DataOciStackMonitoringBaselineableMetricsEvaluate#dimensions}.

---

### DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints {

};
```


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints {
    string Timestamp,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.timestamp">Timestamp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}. |

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.timestamp"></a>

```csharp
public string Timestamp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}.

---

### DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints {
    string Timestamp,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.timestamp">Timestamp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}. |

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.timestamp"></a>

```csharp
public string Timestamp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.get"></a>

```csharp
private DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.anomaly">Anomaly</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.high">High</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.low">Low</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Anomaly`<sup>Required</sup> <a name="Anomaly" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.anomaly"></a>

```csharp
public double Anomaly { get; }
```

- *Type:* double

---

##### `High`<sup>Required</sup> <a name="High" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.high"></a>

```csharp
public double High { get; }
```

- *Type:* double

---

##### `Low`<sup>Required</sup> <a name="Low" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.low"></a>

```csharp
public double Low { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints</a>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.get"></a>

```csharp
private DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.anomaly">Anomaly</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.high">High</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.low">Low</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Anomaly`<sup>Required</sup> <a name="Anomaly" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.anomaly"></a>

```csharp
public double Anomaly { get; }
```

- *Type:* double

---

##### `High`<sup>Required</sup> <a name="High" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.high"></a>

```csharp
public double High { get; }
```

- *Type:* double

---

##### `Low`<sup>Required</sup> <a name="Low" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.low"></a>

```csharp
public double Low { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints</a>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.get"></a>

```csharp
private DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestampInput">TimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestampInput"></a>

```csharp
public string TimestampInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.get"></a>

```csharp
private DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putEvaluationDataPoints">PutEvaluationDataPoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putTrainingDataPoints">PutTrainingDataPoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluationDataPoints` <a name="PutEvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putEvaluationDataPoints"></a>

```csharp
private void PutEvaluationDataPoints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putEvaluationDataPoints.parameter.value"></a>

- *Type:* object

---

##### `PutTrainingDataPoints` <a name="PutTrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putTrainingDataPoints"></a>

```csharp
private void PutTrainingDataPoints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putTrainingDataPoints.parameter.value"></a>

- *Type:* object

---

##### `ResetDimensions` <a name="ResetDimensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dataPoints">DataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPoints">EvaluationDataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPoints">TrainingDataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPointsInput">EvaluationDataPointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPointsInput">TrainingDataPointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataPoints`<sup>Required</sup> <a name="DataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dataPoints"></a>

```csharp
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList DataPoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList</a>

---

##### `EvaluationDataPoints`<sup>Required</sup> <a name="EvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPoints"></a>

```csharp
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList EvaluationDataPoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList</a>

---

##### `TrainingDataPoints`<sup>Required</sup> <a name="TrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPoints"></a>

```csharp
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList TrainingDataPoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EvaluationDataPointsInput`<sup>Optional</sup> <a name="EvaluationDataPointsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPointsInput"></a>

```csharp
public object EvaluationDataPointsInput { get; }
```

- *Type:* object

---

##### `TrainingDataPointsInput`<sup>Optional</sup> <a name="TrainingDataPointsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPointsInput"></a>

```csharp
public object TrainingDataPointsInput { get; }
```

- *Type:* object

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.get"></a>

```csharp
private DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestampInput">TimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestampInput"></a>

```csharp
public string TimestampInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



