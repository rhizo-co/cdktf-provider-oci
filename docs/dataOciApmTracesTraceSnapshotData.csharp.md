# `dataOciApmTracesTraceSnapshotData` Submodule <a name="`dataOciApmTracesTraceSnapshotData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTraceSnapshotData <a name="DataOciApmTracesTraceSnapshotData" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data oci_apm_traces_trace_snapshot_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSnapshotData(Construct Scope, string Id, DataOciApmTracesTraceSnapshotDataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig">DataOciApmTracesTraceSnapshotDataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig">DataOciApmTracesTraceSnapshotDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized">ResetIsSummarized</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime">ResetSnapshotTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId">ResetThreadId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSummarized` <a name="ResetIsSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized"></a>

```csharp
private void ResetIsSummarized()
```

##### `ResetSnapshotTime` <a name="ResetSnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime"></a>

```csharp
private void ResetSnapshotTime()
```

##### `ResetThreadId` <a name="ResetThreadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId"></a>

```csharp
private void ResetThreadId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTraceSnapshotData.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTraceSnapshotData.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTraceSnapshotData.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesTraceSnapshotData.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmTracesTraceSnapshotData to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmTracesTraceSnapshotData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTraceSnapshotData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails">TraceSnapshotDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput">IsSummarizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput">SnapshotTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput">ThreadIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput">TraceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized">IsSummarized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime">SnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId">ThreadId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey">TraceKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `TraceSnapshotDetails`<sup>Required</sup> <a name="TraceSnapshotDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails"></a>

```csharp
public DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList TraceSnapshotDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput"></a>

```csharp
public string ApmDomainIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsSummarizedInput`<sup>Optional</sup> <a name="IsSummarizedInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput"></a>

```csharp
public object IsSummarizedInput { get; }
```

- *Type:* object

---

##### `SnapshotTimeInput`<sup>Optional</sup> <a name="SnapshotTimeInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput"></a>

```csharp
public string SnapshotTimeInput { get; }
```

- *Type:* string

---

##### `ThreadIdInput`<sup>Optional</sup> <a name="ThreadIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput"></a>

```csharp
public string ThreadIdInput { get; }
```

- *Type:* string

---

##### `TraceKeyInput`<sup>Optional</sup> <a name="TraceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput"></a>

```csharp
public string TraceKeyInput { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSummarized`<sup>Required</sup> <a name="IsSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized"></a>

```csharp
public object IsSummarized { get; }
```

- *Type:* object

---

##### `SnapshotTime`<sup>Required</sup> <a name="SnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime"></a>

```csharp
public string SnapshotTime { get; }
```

- *Type:* string

---

##### `ThreadId`<sup>Required</sup> <a name="ThreadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId"></a>

```csharp
public string ThreadId { get; }
```

- *Type:* string

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey"></a>

```csharp
public string TraceKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceSnapshotDataConfig <a name="DataOciApmTracesTraceSnapshotDataConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSnapshotDataConfig {
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
    object IsSummarized = null,
    string SnapshotTime = null,
    string ThreadId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey">TraceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized">IsSummarized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime">SnapshotTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId">ThreadId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}.

---

##### `TraceKey`<sup>Required</sup> <a name="TraceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey"></a>

```csharp
public string TraceKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSummarized`<sup>Optional</sup> <a name="IsSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized"></a>

```csharp
public object IsSummarized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}.

---

##### `SnapshotTime`<sup>Optional</sup> <a name="SnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime"></a>

```csharp
public string SnapshotTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}.

---

##### `ThreadId`<sup>Optional</sup> <a name="ThreadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId"></a>

```csharp
public string ThreadId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}.

---

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get"></a>

```csharp
private DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a>

---



