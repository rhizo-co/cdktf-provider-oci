# `dataOciApmTracesTraceAggregatedSnapshotData` Submodule <a name="`dataOciApmTracesTraceAggregatedSnapshotData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTraceAggregatedSnapshotData <a name="DataOciApmTracesTraceAggregatedSnapshotData" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data oci_apm_traces_trace_aggregated_snapshot_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceAggregatedSnapshotData(Construct Scope, string Id, DataOciApmTracesTraceAggregatedSnapshotDataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig">DataOciApmTracesTraceAggregatedSnapshotDataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig">DataOciApmTracesTraceAggregatedSnapshotDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanKey">ResetSpanKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanName">ResetSpanName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServerName` <a name="ResetServerName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetSpanKey` <a name="ResetSpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanKey"></a>

```csharp
private void ResetSpanKey()
```

##### `ResetSpanName` <a name="ResetSpanName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanName"></a>

```csharp
private void ResetSpanName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTraceAggregatedSnapshotData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTraceAggregatedSnapshotData.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTraceAggregatedSnapshotData.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTraceAggregatedSnapshotData.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTraceAggregatedSnapshotData.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciApmTracesTraceAggregatedSnapshotData resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmTracesTraceAggregatedSnapshotData to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmTracesTraceAggregatedSnapshotData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTraceAggregatedSnapshotData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList">DataOciApmTracesTraceAggregatedSnapshotDataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKeyInput">SpanKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanNameInput">SpanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKeyInput">TraceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKey">SpanKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanName">SpanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKey">TraceKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.details"></a>

```csharp
public DataOciApmTracesTraceAggregatedSnapshotDataDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList">DataOciApmTracesTraceAggregatedSnapshotDataDetailsList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainIdInput"></a>

```csharp
public string ApmDomainIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `SpanKeyInput`<sup>Optional</sup> <a name="SpanKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKeyInput"></a>

```csharp
public string SpanKeyInput { get; }
```

- *Type:* string

---

##### `SpanNameInput`<sup>Optional</sup> <a name="SpanNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanNameInput"></a>

```csharp
public string SpanNameInput { get; }
```

- *Type:* string

---

##### `TraceKeyInput`<sup>Optional</sup> <a name="TraceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKeyInput"></a>

```csharp
public string TraceKeyInput { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `SpanKey`<sup>Required</sup> <a name="SpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKey"></a>

```csharp
public string SpanKey { get; }
```

- *Type:* string

---

##### `SpanName`<sup>Required</sup> <a name="SpanName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanName"></a>

```csharp
public string SpanName { get; }
```

- *Type:* string

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKey"></a>

```csharp
public string TraceKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceAggregatedSnapshotDataConfig <a name="DataOciApmTracesTraceAggregatedSnapshotDataConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceAggregatedSnapshotDataConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApmDomainId,
    string TraceKey,
    string Id = null,
    string ServerName = null,
    string ServiceName = null,
    string SpanKey = null,
    string SpanName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.traceKey">TraceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanKey">SpanKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanName">SpanName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}.

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.traceKey"></a>

```csharp
public string TraceKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}.

---

##### `SpanKey`<sup>Optional</sup> <a name="SpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanKey"></a>

```csharp
public string SpanKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}.

---

##### `SpanName`<sup>Optional</sup> <a name="SpanName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanName"></a>

```csharp
public string SpanName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}.

---

### DataOciApmTracesTraceAggregatedSnapshotDataDetails <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceAggregatedSnapshotDataDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceAggregatedSnapshotDataDetailsList <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceAggregatedSnapshotDataDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get"></a>

```csharp
private DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails">DataOciApmTracesTraceAggregatedSnapshotDataDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesTraceAggregatedSnapshotDataDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails">DataOciApmTracesTraceAggregatedSnapshotDataDetails</a>

---



